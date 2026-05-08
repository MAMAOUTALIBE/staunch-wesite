# Déploiement STAUNCH sur VPS Hostinger (Docker + Traefik)

## 🎯 Pré-requis VPS

- VPS Hostinger Ubuntu 24.04 avec **Docker + Traefik** préinstallés
- Hostname : `srv1643859.hstgr.cloud` — IP : `187.127.228.197`
- Accès SSH `root`

## 🚀 Déploiement initial — 5 étapes

### 1. Récupère ton mot de passe SSH

Sur https://hpanel.hostinger.com → VPS → ton serveur → **SSH Access** → note le mot de passe (ou réinitialise-le si oublié).

### 2. Connexion SSH

Depuis ton Mac (nouveau terminal) :

```bash
ssh root@187.127.228.197
```

Tape `yes` au premier prompt, puis ton mot de passe (caractères invisibles, normal).

### 3. Vérifie l'environnement

```bash
docker --version
docker compose version
docker network ls | grep -i traefik
df -h /
```

Note bien le **nom exact** du réseau Traefik (souvent `traefik`, parfois `traefik_default`, `proxy`, `web`).

### 4. Clone le repo et lance le déploiement

```bash
# Clone du code
cd /root/
git clone https://github.com/MAMAOUTALIBE/staunch-wesite.git
cd staunch-wesite

# Lancement automatique (le script détecte le réseau Traefik et configure tout)
chmod +x deploy.sh
./deploy.sh up
```

Le script `deploy.sh` :
- Détecte automatiquement le nom du réseau Traefik existant
- Build l'image Docker (3-5 min la 1ère fois)
- Démarre le container avec les bons labels Traefik
- Affiche l'état des services à la fin

### 5. Vérifie que le site est en ligne

Dans ton navigateur :
- http://srv1643859.hstgr.cloud
- http://187.127.228.197

Depuis le VPS :
```bash
./deploy.sh status
```

## 🔄 Mises à jour

Quand tu push du nouveau code sur GitHub :

```bash
ssh root@187.127.228.197
cd /root/staunch-wesite
./deploy.sh update
```

Le script `update` :
1. `git pull origin main`
2. Rebuild l'image Docker
3. Redémarre le container
4. Nettoie les images orphelines

## 🛠️ Commandes utiles (`deploy.sh`)

| Commande | Effet |
|----------|-------|
| `./deploy.sh up` | Build + démarre (1ère fois ou après détection réseau) |
| `./deploy.sh down` | Arrête et supprime le container |
| `./deploy.sh restart` | Redémarre sans rebuild |
| `./deploy.sh logs` | Suit les logs en direct (Ctrl+C pour quitter) |
| `./deploy.sh status` | État + tests de connectivité |
| `./deploy.sh update` | git pull + rebuild + redéploie |
| `./deploy.sh detect` | (Re-)détecte le nom du réseau Traefik |

## 🐛 Troubleshooting

### Site inaccessible (404 / 502)

```bash
# 1. Container actif ?
docker compose ps

# 2. Logs Next.js
./deploy.sh logs

# 3. Test interne
docker exec staunch-website curl -sf http://127.0.0.1:3000/

# 4. Logs Traefik
docker logs $(docker ps -q --filter "name=traefik") --tail=30
```

### Mauvais réseau Traefik

```bash
# Re-détecter
./deploy.sh detect
# Puis relancer
./deploy.sh up
```

### Build échoue (espace disque)

```bash
df -h /
# Si > 80% plein :
docker system prune -af
docker volume prune -f
```

### Conflit de port 80/443

C'est Traefik qui tient les ports 80/443. STAUNCH **ne doit PAS** exposer ces ports en direct — c'est volontaire dans `docker-compose.yml` (`expose: "3000"` au lieu de `ports:`).

## 🔐 HTTPS (plus tard, quand tu auras un domaine)

Quand `staunch.gn` (ou autre) sera acheté et pointera vers `187.127.228.197` :

1. Modifie `docker-compose.yml` — ajoute :
```yaml
    labels:
      - "traefik.http.routers.staunch.rule=Host(`staunch.gn`)"
      - "traefik.http.routers.staunch.entrypoints=websecure"
      - "traefik.http.routers.staunch.tls=true"
      - "traefik.http.routers.staunch.tls.certresolver=letsencrypt"
```

2. `./deploy.sh update` — Traefik génère automatiquement le certificat SSL Let's Encrypt.

## 📂 Structure du projet sur le VPS

```
/root/staunch-wesite/
├── Dockerfile           # Multi-stage build Next.js standalone
├── docker-compose.yml   # Service + labels Traefik
├── deploy.sh            # Script tout-en-un
├── .env.deploy          # Généré (TRAEFIK_NETWORK=...)
├── public/              # Images, JSON, favicon
├── src/                 # Code Next.js
└── package.json
```

## 🧯 Rollback rapide

Si une mise à jour casse le site :

```bash
cd /root/staunch-wesite
git log --oneline -5                    # liste des commits
git reset --hard <commit-précédent>     # rollback
./deploy.sh up                          # rebuild + redéploie
```
