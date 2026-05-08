# 📦 Package STAUNCH pour adaptation du template Solvior

Bonjour Mohamed ! 👋

Vous avez acheté le template **Solvior** (excellent choix !). Ce package contient tout ce qu'il faut pour que **Claude Code** adapte ce template à votre cabinet **STAUNCH** sans toucher au design, juste en remplaçant les textes, images et logos.

---

## 🎯 Ce que Claude Code va faire

✅ Remplacer les logos par STAUNCH
✅ Remplacer tous les textes anglais par votre contenu français
✅ Remplacer les photos par vos portraits
✅ Modifier les 6 services pour vos pôles d'activité
✅ Adapter les coordonnées (Conakry, Guinée)
✅ Modifier les chiffres clés (100+ entrepreneurs, etc.)
✅ Tester avec `npm run dev`
✅ Vous donner le lien pour voir le résultat

✅ **GARDER 100% DU DESIGN** du template Solvior intact (couleurs, animations, layouts)

---

## 🚀 Procédure étape par étape

### Étape 1 — Préparer le dossier de travail

Sur votre ordinateur, créez un dossier (par exemple sur le Bureau) :

```
~/Desktop/staunch-website/
├── solvior-react-nextjs-template/    ← le template décompressé
└── staunch-template-package/         ← ce package (décompressé)
```

**Important** : les 2 dossiers doivent être au MÊME niveau (côte à côte).

### Étape 2 — Ouvrir le terminal dans ce dossier

**Sur Mac** :
- Ouvrez le Finder
- Allez sur Bureau
- Clic droit sur `staunch-website` → "Nouveau Terminal au dossier"

**Sur Windows** :
- Ouvrez l'Explorateur
- Allez sur le Bureau
- Maintenez `Shift` + clic droit sur `staunch-website` → "Ouvrir PowerShell ici"

### Étape 3 — Lancer Claude Code

Dans le terminal, tapez :

```bash
claude
```

(Si Claude Code n'est pas installé, tapez d'abord : `npm install -g @anthropic-ai/claude-code`)

### Étape 4 — Donner la mission à Claude Code

Une fois Claude Code lancé, copiez-collez **exactement** ce message :

```
Salut Claude Code !

Lis attentivement le fichier staunch-template-package/PROMPT-CLAUDE-CODE.md
et exécute la mission EXACTEMENT comme décrite.

Je veux adapter le template Solvior pour mon cabinet STAUNCH.
NE CHANGE PAS le design, les couleurs ou les animations.
Modifie UNIQUEMENT les textes, logos et images en suivant le prompt.

Tous les contenus à utiliser sont dans staunch-template-package/contenu/
Tous les logos et images dans staunch-template-package/assets/

Travaille directement dans solvior-react-nextjs-template/solvior/
Ne crée PAS de zip, je veux pouvoir tester en live avec npm run dev.

Commence maintenant. Ne pose pas de questions, toutes les specs
sont dans le fichier PROMPT-CLAUDE-CODE.md.
```

### Étape 5 — Laisser Claude Code travailler

Claude Code va :
1. Lire le prompt
2. Installer les dépendances (`npm install`) — **5-10 minutes**
3. Modifier les fichiers JSON et composants — **15-30 minutes**
4. Tester avec `npm run dev`
5. Vous donner le lien `http://localhost:3000`

⏱️ Temps total : **30 à 45 minutes**

### Étape 6 — Tester votre nouveau site

Quand Claude Code dit que c'est prêt, ouvrez votre navigateur et allez sur :
```
http://localhost:3000
```

**🎉 Vous verrez votre site STAUNCH en live !**

---

## 📂 Contenu du package

```
staunch-template-package/
│
├── 📄 PROMPT-CLAUDE-CODE.md      ← Le prompt à donner à Claude Code (NE PAS MODIFIER)
├── 📄 README-MOHAMED.md           ← Ce fichier (vos instructions)
│
├── contenu/
│   ├── services.json              ← Les 6 services STAUNCH (textes complets)
│   └── contenu-staunch.json       ← Tous les autres textes (Hero, About, Footer, etc.)
│
└── assets/
    ├── logos/
    │   ├── staunch-logo.svg       ← Logo STAUNCH vectoriel
    │   ├── staunch-logo.png       ← Logo STAUNCH raster
    │   ├── mb-jalloh-logo.svg
    │   └── mb-jalloh-logo.png
    └── images/
        ├── portrait-canape.jpg    ← Photo fondateur (canapé)
        ├── portrait-cercle.jpg    ← Photo fondateur (formel)
        └── portrait-pupitre.jpg   ← Photo fondateur (conférence)
```

---

## ❓ FAQ

### Q : Et si Claude Code pose des questions ?
**R** : Dites simplement *"Suis le PROMPT-CLAUDE-CODE.md à la lettre, ne pose pas de questions, avance directement."*

### Q : Et si quelque chose casse ?
**R** : Dites à Claude Code : *"Il y a une erreur. Corrige-la et continue."* — il saura quoi faire.

### Q : Combien de temps avant que ce soit fini ?
**R** : Environ 30 à 45 minutes au total (installation + modifications + test).

### Q : Le design va-t-il changer ?
**R** : NON — le prompt interdit explicitement à Claude Code de toucher au design. Seuls les textes et images changent.

### Q : Les chiffres (100+ entrepreneurs, etc.) sont-ils réels ?
**R** : Ce sont des estimations basées sur ce que vous m'avez dit. Vous pourrez ajuster facilement après.

### Q : Et si je veux modifier un texte plus tard ?
**R** : Tous les textes sont dans des fichiers JSON faciles à éditer. Demandez à Claude Code de modifier tel ou tel texte spécifique.

### Q : Comment mettre le site en ligne après ?
**R** : Une fois validé en local, vous pouvez le déployer gratuitement sur **Vercel** :
1. Créer un compte sur https://vercel.com
2. Pousser le code sur GitHub
3. Connecter Vercel à votre repo
4. ⚡ Site en ligne en 2 minutes

---

## 🎯 Phases suivantes (à demander plus tard)

Une fois la Phase 1 validée :

| Phase | Contenu | Quand demander |
|---|---|---|
| **Phase 2** | Bilingue Français + Anglais (i18n) | Après validation de Phase 1 |
| **Phase 3** | Espace client sécurisé (login, dashboard) | Quand vous voulez digitaliser |
| **Phase 4** | Diagnostic interactif MBTI / RDV en ligne | Pour automatiser le coaching |
| **Phase 5** | Paiement (Mobile Money, Stripe) | Pour les paiements clients |

---

## 📞 Besoin d'aide ?

Revenez me voir avec :
- ✅ "C'est fait, tout marche !" → on passe à la Phase 2
- ⚠️ "J'ai une erreur..." → copiez l'erreur, je vous aide
- 🎨 "Je veux changer X" → décrivez-moi, je vous guide

**Bonne mise en place ! 🚀**

*Indéfectible. Solide. À vos côtés.*

— STAUNCH Team
