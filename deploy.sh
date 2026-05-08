#!/usr/bin/env bash
# ============================================================
# STAUNCH — Script de déploiement automatique sur VPS Hostinger
# ============================================================
# À exécuter sur le VPS (en SSH root) après git clone du repo.
# Détecte le réseau Traefik existant, build l'image Docker et
# démarre le container avec la bonne configuration.
#
# Usage :
#   chmod +x deploy.sh
#   ./deploy.sh [up|down|restart|logs|update|status]
# ============================================================

set -euo pipefail

ACTION="${1:-up}"
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
COMPOSE_CMD="docker compose"

cd "$PROJECT_DIR"

# Couleurs (si tty)
if [ -t 1 ]; then
    RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'; BLUE='\033[0;34m'; NC='\033[0m'
else
    RED=''; GREEN=''; YELLOW=''; BLUE=''; NC=''
fi

log()  { echo -e "${BLUE}[$(date +%H:%M:%S)]${NC} $*"; }
ok()   { echo -e "${GREEN}✓${NC} $*"; }
warn() { echo -e "${YELLOW}⚠${NC} $*"; }
fail() { echo -e "${RED}✗${NC} $*" >&2; exit 1; }

# ============== Vérifs préalables ==============
require_docker() {
    command -v docker >/dev/null 2>&1 || fail "Docker n'est pas installé"
    docker info >/dev/null 2>&1 || fail "Docker daemon ne tourne pas"
    docker compose version >/dev/null 2>&1 || fail "Docker Compose v2 requis (plugin docker-compose-plugin)"
}

# ============== Détection réseau Traefik ==============
detect_traefik_network() {
    # Cherche un réseau Docker dont le nom contient "traefik"
    local nets
    nets=$(docker network ls --format '{{.Name}}' | grep -iE '^(traefik|proxy|web)$|traefik' || true)

    if [ -z "$nets" ]; then
        warn "Aucun réseau Traefik détecté."
        warn "Réseaux Docker existants :"
        docker network ls
        echo ""
        read -rp "Entre le nom EXACT du réseau Traefik à utiliser (ou tape Entrée pour 'traefik') : " NET
        NET="${NET:-traefik}"
    elif [ "$(echo "$nets" | wc -l)" -eq 1 ]; then
        NET="$nets"
        ok "Réseau Traefik détecté : $NET"
    else
        warn "Plusieurs candidats trouvés :"
        echo "$nets"
        echo ""
        read -rp "Choisis le nom du réseau (défaut: 1er) : " NET
        NET="${NET:-$(echo "$nets" | head -1)}"
    fi

    echo "TRAEFIK_NETWORK=$NET" > "$PROJECT_DIR/.env.deploy"
    ok "Réseau écrit dans .env.deploy : TRAEFIK_NETWORK=$NET"
}

# ============== Actions ==============
do_up() {
    require_docker
    [ -f "$PROJECT_DIR/.env.deploy" ] || detect_traefik_network
    # shellcheck disable=SC1091
    source "$PROJECT_DIR/.env.deploy"
    export TRAEFIK_NETWORK
    log "Build de l'image Docker (peut prendre 3-5 min la première fois)…"
    $COMPOSE_CMD --env-file "$PROJECT_DIR/.env.deploy" build
    log "Démarrage du container…"
    $COMPOSE_CMD --env-file "$PROJECT_DIR/.env.deploy" up -d
    sleep 5
    do_status
    log "Le site sera accessible sous quelques secondes via :"
    log "  → http://srv1643859.hstgr.cloud"
    log "  → http://187.127.228.197"
}

do_down() {
    require_docker
    log "Arrêt du container…"
    $COMPOSE_CMD down
    ok "Container arrêté"
}

do_restart() {
    require_docker
    log "Redémarrage…"
    $COMPOSE_CMD restart
    do_status
}

do_logs() {
    require_docker
    $COMPOSE_CMD logs -f --tail=100 staunch
}

do_status() {
    require_docker
    log "Containers :"
    $COMPOSE_CMD ps
    echo ""
    log "Test interne :"
    if docker exec staunch-website curl -fsS http://127.0.0.1:3000/ -o /dev/null 2>/dev/null; then
        ok "Le service répond sur :3000 (interne au container)"
    else
        warn "Le service ne répond pas (peut-être en cours de démarrage)"
    fi
    echo ""
    log "Test via Traefik (depuis le VPS) :"
    if curl -sf -H "Host: srv1643859.hstgr.cloud" http://127.0.0.1/ -o /dev/null 2>/dev/null; then
        ok "Traefik route correctement le trafic"
    else
        warn "Traefik ne route pas (vérifie les labels et le réseau)"
    fi
}

do_update() {
    require_docker
    log "Récupération du nouveau code…"
    git fetch origin
    git reset --hard origin/main
    log "Rebuild + redéploiement…"
    [ -f "$PROJECT_DIR/.env.deploy" ] || detect_traefik_network
    $COMPOSE_CMD --env-file "$PROJECT_DIR/.env.deploy" up -d --build
    sleep 5
    log "Nettoyage des images orphelines…"
    docker image prune -f
    do_status
    ok "Mise à jour terminée"
}

# ============== Routage ==============
case "$ACTION" in
    up)        do_up        ;;
    down)      do_down      ;;
    restart)   do_restart   ;;
    logs)      do_logs      ;;
    status)    do_status    ;;
    update)    do_update    ;;
    detect)    detect_traefik_network ;;
    *)
        echo "Usage : $0 {up|down|restart|logs|status|update|detect}"
        echo ""
        echo "  up      Build et démarre le container (1ère fois ou après update)"
        echo "  down    Arrête et supprime le container"
        echo "  restart Redémarre sans rebuild"
        echo "  logs    Suit les logs du container"
        echo "  status  Affiche l'état + tests de connectivité"
        echo "  update  git pull origin main + rebuild + redéploie"
        echo "  detect  (Re-)détecte le nom du réseau Traefik"
        exit 1
        ;;
esac
