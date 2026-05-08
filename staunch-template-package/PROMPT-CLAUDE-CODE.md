# 🎯 MISSION POUR CLAUDE CODE — Adaptation du template Solvior pour STAUNCH

## CONTEXTE

J'ai acheté le template **Solvior** (Next.js 15 + React 19 + Bootstrap + GSAP) — un template professionnel pour cabinet de conseil. Je veux l'adapter pour mon cabinet **STAUNCH** sans toucher au design.

**RÈGLE D'OR ABSOLUE** : NE CHANGE RIEN AU DESIGN, AUX ANIMATIONS, AUX COULEURS, AUX FONTS, AUX LAYOUTS. Tu modifies UNIQUEMENT :
- ✅ Les textes (titres, descriptions, boutons)
- ✅ Le logo
- ✅ Les images de portraits/photos
- ✅ Les données dans les fichiers JSON (`/public/fakedata/`)
- ✅ Les coordonnées de contact
- ❌ PAS de modifications CSS/SCSS
- ❌ PAS de changement de structure HTML
- ❌ PAS de remplacement d'animations
- ❌ PAS de changement de couleurs

---

## 🏢 IDENTITÉ DE LA MARQUE

**Nom** : STAUNCH (cabinet 360°)
**Slogan** : « Votre partenaire indéfectible pour entreprendre en Guinée »
**Pôle interne** : MB-JALLOH (coaching et formation)
**Localisation** : Kipé, Conakry, République de Guinée

---

## 📋 TÂCHES À EFFECTUER (dans l'ordre)

### Étape 1 — Installer le template

```bash
cd solvior-react-nextjs-template/solvior
npm install
```

Vérifie que `npm run dev` démarre correctement sur `http://localhost:3000` AVANT toute modification. Visite la page d'accueil pour voir l'état initial.

### Étape 2 — Remplacer les logos

Le template a 2 logos dans `/public/images/logos/` :
- `primary-logo.png` (logo sombre, fond clair)
- `secondary-logo.png` (logo clair, fond sombre)

**Mission** : remplace ces 2 fichiers par le logo STAUNCH fourni.

Source : `staunch-template-package/assets/logos/staunch-logo.png` (logo STAUNCH bleu sur fond transparent)

```bash
# Remplacer en gardant les mêmes noms de fichiers
cp staunch-template-package/assets/logos/staunch-logo.png solvior/public/images/logos/primary-logo.png
cp staunch-template-package/assets/logos/staunch-logo.png solvior/public/images/logos/secondary-logo.png
```

⚠️ Note : Le logo STAUNCH a un fond transparent. Pour la version sombre (footer), il peut nécessiter d'être en blanc. Si tu vois que le logo n'est pas visible dans le footer (fond sombre), crée une version blanche du logo en SVG ou PNG.

### Étape 3 — Modifier le fichier services.json

Remplace **intégralement** le fichier `solvior/public/fakedata/services.json` par le contenu du fichier `staunch-template-package/contenu/services.json` qui contient les 6 services STAUNCH :
1. Coaching & Formation (par MB-JALLOH)
2. Accompagnement Startup
3. Conseil aux Entreprises
4. Implantation en Guinée
5. Facilitation Institutionnelle
6. Réseautage & Partenariats

**IMPORTANT** : conserve la même STRUCTURE JSON (mêmes clés). Modifie uniquement les VALEURS (textes en français).

### Étape 4 — Modifier le menu de navigation

Fichier : `solvior/public/fakedata/nav-items.json`

Remplace le menu existant par le menu STAUNCH :
- Accueil → `/`
- À propos → `/about`
- Services → `/services` (avec sous-menu des 6 services)
- Méthodologie → `/methodologie` (page à créer si elle n'existe pas, sinon réutiliser une page existante comme `/history` ou `/process`)
- Implantation Guinée → `/implantation` (réutilise une page services existante avec ID 4)
- Blog → `/blogs`
- Contact → `/contact`

⚠️ Garde la STRUCTURE du JSON (clés `id`, `name`, `path`, `submenu`). Modifie uniquement les noms.

### Étape 5 — Modifier les composants avec textes en dur

Certains textes sont écrits directement dans les composants React (pas dans des JSON). Voici la liste précise des composants à modifier (utilise le fichier `staunch-template-package/contenu/contenu-staunch.json` comme source de vérité pour tous les textes) :

#### A. Hero (page d'accueil)

Fichier : `solvior/src/components/sections/heros/Hero.js`

À remplacer :
- `Maximise growth qualified business consulting` → `Votre partenaire indéfectible pour entreprendre en Guinée`
- Le mot avec `<span className="active-color">consulting</span>` → garde la même structure : `<span className="active-color">Guinée</span>`
- Description : `Transform your business with expert consultancy services...` → utiliser le texte HERO.description du contenu-staunch.json
- Bouton : `Free consultation` → `Consultation gratuite`

#### B. About1

Fichier : `solvior/src/components/sections/About/About1.js`

Remplace tous les textes par ceux de la section ABOUT du fichier contenu-staunch.json.

#### C. Funfact1 (chiffres clés)

Fichier : `solvior/src/components/sections/funfacts/Funfact1.js`

Remplace les chiffres et labels par :
- 100+ → "Entrepreneurs accompagnés"
- 6 → "Pôles de services"
- 5+ → "Années d'expertise"
- 100% → "Sur-mesure"

(Source : FUNFACTS dans contenu-staunch.json)

Le titre : `Exploring fun tidbits and fascinating facts` → `Notre impact en quelques nombres`

#### D. Footer

Fichier : `solvior/src/components/layout/footer/Footer.js`

Remplace TOUS les textes "USA / Canada / Australia" par :
- **Headquarters - Guinée** : Kipé, Conakry, République de Guinée — +224 629 28 45 97
- **Email** : contact@staunch.gn
- **WhatsApp** : +27 68 183 4827

Modifie le copyright : `© 2026 STAUNCH. Tous droits réservés. MB-JALLOH est un pôle de STAUNCH.`

#### E. Tous les autres composants visibles sur la page d'accueil

Pour chaque composant utilisé dans `solvior/src/app/page.js` :
- `Features` (Features.js)
- `Skills1` (Skills1.js)
- `Testimonials1` (Testimonials1.js)
- `Portfolios1` (Portfolios1.js)
- `Blogs1` (Blogs1.js)

Remplace les textes en dur par leurs équivalents dans le fichier contenu-staunch.json. Si un composant utilise des données depuis un JSON, modifie le JSON correspondant dans `/public/fakedata/`.

### Étape 6 — Modifier les autres fichiers JSON

Adapte également ces fichiers pour cohérence :

- `testimonials.json` → utiliser TESTIMONIALS.items du contenu-staunch.json
- `blogs.json` → utiliser BLOG.articles
- `team-members.json` → mettre uniquement Mohamed Bashir Jalloh comme fondateur (utiliser une des 3 photos fournies)
- `socials.json` → mettre les vrais liens (mettre `#` si pas de compte pour le moment)
- `brands.json` → tu peux vider ou mettre des logos de partenaires institutionnels génériques

### Étape 7 — Remplacer les images de portraits

Le template utilise probablement des stock photos. Remplace les portraits du fondateur dans :
- `solvior/public/images/about/` (utiliser portrait-canape.jpg)
- `solvior/public/images/team/` (utiliser portrait-cercle.jpg)
- `solvior/public/images/hero/` (si applicable, utiliser portrait-pupitre.jpg)

Source : `staunch-template-package/assets/images/`
- portrait-canape.jpg
- portrait-cercle.jpg
- portrait-pupitre.jpg

⚠️ Conserve les MÊMES NOMS de fichiers que ceux du template (ne change pas les noms des fichiers, remplace juste leur contenu) pour éviter de casser les liens.

### Étape 8 — Adapter la page Contact

Fichier : `solvior/src/components/sections/contacts/` (regarde quel composant est utilisé)

- Adresse : Kipé, Conakry, République de Guinée
- Téléphones : +224 629 28 45 97, +224 610 20 13 13
- Email : contact@staunch.gn
- WhatsApp : +27 68 183 4827
- Horaires : Lundi - Vendredi : 8h00 - 18h00

Pour le formulaire, ajoute un champ `subject` (sélecteur) avec les 7 options définies dans CONTACT.form.subjects (les 6 services + "Autre").

### Étape 9 — Métadonnées du site

Fichier : `solvior/src/app/layout.js`

Modifie les métadonnées :
- `title` : "STAUNCH — Cabinet de Conseil 360° en Guinée"
- `description` : utiliser META.siteDescription du contenu-staunch.json
- Favicon : remplace `solvior/src/app/favicon.ico` ou `solvior/public/images/fav.png` par le logo STAUNCH

### Étape 10 — Test final

```bash
npm run dev
```

Vérifie que :
- ✅ La page d'accueil s'affiche avec le logo STAUNCH
- ✅ Tous les textes sont en français
- ✅ Les 6 services STAUNCH apparaissent
- ✅ Les chiffres clés sont corrects (100+, 6, 5+, 100%)
- ✅ Les coordonnées du footer sont les bonnes
- ✅ Les animations GSAP fonctionnent toujours
- ✅ Le design est INCHANGÉ par rapport à l'original
- ✅ Aucune erreur dans la console

Donne-moi ensuite le lien `http://localhost:3000` pour tester en live.

---

## 🚨 RÈGLES IMPORTANTES

1. **NE CRÉE AUCUN FICHIER ZIP** — travaille directement dans le dossier du template.
2. **NE MODIFIE PAS LES FICHIERS CSS/SCSS** dans `/src/app/assets/sass/` — laisse-les intacts.
3. **NE MODIFIE PAS LES COULEURS du template** — STAUNCH adoptera le bleu du template Solvior pour le moment.
4. **NE MODIFIE PAS la structure des pages** — utilise les pages existantes du template.
5. **NE TRADUIS PAS les éléments techniques** (noms de classes CSS, IDs, etc.).
6. **TRAVAILLE EN FRANÇAIS uniquement** pour la Phase 1. Le bilingue FR/EN sera ajouté en Phase 2.
7. Si tu hésites entre 2 options, **CHOISIS LA PLUS SIMPLE** (modifier un JSON > modifier un composant React).
8. **PAS DE QUESTIONS** — toutes les infos sont dans `staunch-template-package/`. Avance directement.

---

## 📂 STRUCTURE DU PACKAGE FOURNI

```
staunch-template-package/
├── PROMPT-CLAUDE-CODE.md         ← Ce fichier (instructions)
├── README-MOHAMED.md              ← Tes instructions à toi (Mohamed)
├── contenu/
│   ├── services.json              ← Les 6 services STAUNCH (à copier dans /public/fakedata/)
│   └── contenu-staunch.json       ← TOUS les textes (Hero, About, Footer, etc.)
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

## ✅ LIVRABLE FINAL ATTENDU

Un site STAUNCH fonctionnel sur `http://localhost:3000`, basé intégralement sur le template Solvior, avec :
- Tous les textes en français adaptés à STAUNCH
- Le logo STAUNCH dans la navbar et le footer
- Les 6 services du cabinet STAUNCH
- Les coordonnées de contact correctes (Conakry, Guinée)
- Le DESIGN IDENTIQUE au template Solvior original (juste les contenus changent)

**Une fois terminé, lance `npm run dev` et donne-moi le lien.**

---

## 🆘 EN CAS DE PROBLÈME

Si une modification casse le site :
1. **Annule la dernière modification** uniquement
2. **Continue** avec les autres modifications
3. À la fin, **liste-moi les éléments qui ont posé problème** pour qu'on les corrige ensemble

Si tu trouves un texte que je n'ai pas mentionné :
- **Garde-le en anglais** — on le traduira après
- **Note-le dans une liste** à me transmettre à la fin

**Commence maintenant. Bon travail !**
