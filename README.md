# Portfolio — Ousmane Ka

Site portfolio personnel de **Ousmane Ka**, développeur Full-Stack.  
Construit en HTML / CSS / JavaScript vanilla — aucune dépendance, aucun build requis.

## 🚀 Lancer en local

### Option 1 — VS Code Live Server (recommandée)
1. Ouvre le dossier dans VS Code
2. Installe l'extension **Live Server** (ritwickdey.LiveServer)
3. Clic droit sur `index.html` → **Open with Live Server**

### Option 2 — Python (si Python est installé)
```bash
# Python 3
python -m http.server 3000
# Puis ouvre http://localhost:3000
```

### Option 3 — Node.js (si Node est installé)
```bash
npx serve .
# Puis ouvre l'URL affichée
```

## 📁 Structure du projet

```
portfolio-ousmane-ka/
├── index.html            # Structure complète du site
├── style.css             # Design system + thème clair/sombre + responsive
├── main.js               # Interactions : animations, formulaire, thème...
├── hero_avatar.jpg       # Avatar hero section
├── project_taskflow.jpg  # Mockup projet TaskFlow
├── project_ecotrack.jpg  # Mockup projet EcoTrack
└── README.md             # Ce fichier
```

## 🌐 Déployer sur Vercel (gratuit, recommandé)

1. Crée un compte sur [vercel.com](https://vercel.com)
2. Installe le CLI : `npm i -g vercel`
3. Dans le dossier du projet : `vercel`
4. Suis les instructions → ton site est en ligne en 30 secondes

**Ou via l'interface web :**
- Upload le dossier directement sur vercel.com

## 🌐 Déployer sur Netlify (alternative)

1. Va sur [netlify.com](https://netlify.com)
2. Glisse-dépose le dossier `portfolio-ousmane-ka/` dans l'interface
3. Ton site est en ligne instantanément avec une URL gratuite

## ✏️ Personnaliser le contenu

### Infos de base
Dans `index.html`, cherche et remplace :
- `ousmane.ka@example.com` → ton email réel
- `linkedin.com/in/ousmane-ka` → ton profil LinkedIn
- `github.com/ousmane-ka` → ton profil GitHub
- Les liens GitHub des projets (`href="https://github.com/ousmane-ka/..."`

### Ajouter tes vrais projets
Dans la section `#projects` de `index.html`, copie un bloc `<article class="project-card">` et modifie :
- Le titre, la description
- Les badges `.tech-pill`
- Les liens GitHub/démo
- L'image (`project-img src=...`)

### Ajouter ta photo
Remplace `hero_avatar.jpg` par ta photo :
```html
<img src="ta_photo.jpg" alt="Ousmane Ka" class="hero-avatar" />
```
Idéalement : photo carrée, minimum 400×400px.

### Modifier la palette de couleurs
Dans `style.css`, change la variable `--accent` (ligne ~7) :
```css
--accent: hsl(210, 90%, 56%);  /* Bleu électrique actuel */
/* Exemples : */
/* hsl(160, 80%, 45%)  → Vert émeraude */
/* hsl(280, 75%, 60%)  → Lavande */
/* hsl(25, 90%, 55%)   → Orange */
```

### Formulaire de contact (fonctionnel)
Pour rendre le formulaire réellement fonctionnel, intègre **Formspree** ou **EmailJS** :

**Formspree (le plus simple) :**
1. Crée un compte sur [formspree.io](https://formspree.io)
2. Crée un formulaire → copie ton ID
3. Dans `index.html`, modifie la balise `<form>` :
   ```html
   <form action="https://formspree.io/f/TON_ID" method="POST" class="contact-form">
   ```
4. Dans `main.js`, remplace la simulation par un vrai `fetch`

## ⚙️ Fonctionnalités

| Feature | Statut |
|---|---|
| Mode clair / sombre (persisté) | ✅ |
| Navigation responsive avec menu hamburger | ✅ |
| Animations au scroll (IntersectionObserver) | ✅ |
| Barres de compétences animées | ✅ |
| Effet de frappe sur le nom (hero) | ✅ |
| Parallaxe souris sur les cartes flottantes | ✅ |
| Formulaire de contact avec validation | ✅ (simulation) |
| Lazy loading des images | ✅ |
| SEO de base (meta, titres sémantiques) | ✅ |
| Responsive (mobile, tablette, desktop) | ✅ |
| Prêt pour Vercel / Netlify | ✅ |

## 📝 Sections à compléter

- [ ] Remplace les liens GitHub/démo des projets persos par les vraies URLs
- [ ] Remplace les projets persos (TaskFlow, EcoTrack) par tes vrais projets
- [ ] Ajoute ta photo dans `hero_avatar.jpg`
- [ ] Mets ton email réel dans les liens contact et footer
- [ ] Configure le formulaire de contact (Formspree ou EmailJS)
- [ ] Ajoute ton CV en PDF → lien "Télécharger mon CV"

---

