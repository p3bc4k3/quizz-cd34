# Quiz Culture Judo — CD34

Mini-site mobile-first pour le **Comité Départemental de Judo de l'Hérault (CD34)**.

🌐 Domaine prévu : [quizz-cd34.sharejudo.com](http://quizz-cd34.sharejudo.com)

---

## Fonctionnalités

- 60 questions sur 6 thèmes (histoire, code moral, règles du dojo, grades, vocabulaire japonais, arbitrage)
- 3 niveaux : Débutant · Intermédiaire · Confirmé
- 3 modes : Quiz rapide · Par thème · Par niveau
- Correction immédiate avec explication
- Score en temps réel + résultat final avec message motivant
- Partage du score via API native (Web Share) ou copie dans le presse-papiers
- 6 fiches de révision consultables avant le quiz
- PWA installable (offline ready)
- Mobile-first, accessible, sans backend ni connexion

---

## Installation locale

### Prérequis

- Node.js ≥ 18
- npm ≥ 9

### Démarrer en développement

```bash
git clone <url-du-repo>
cd Judo-Quizz
npm install
npm run dev
```

Ouvre [http://localhost:5173](http://localhost:5173)

### Build de production

```bash
npm run build
```

Le dossier `dist/` est généré avec tous les assets optimisés.

### Prévisualiser le build

```bash
npm run preview
```

---

## Déploiement

### Option 1 — Vercel (recommandé)

1. Pousse le projet sur GitHub
2. Sur [vercel.com](https://vercel.com) : **Import Project** → sélectionne le repo
3. Framework preset : **Vite**
4. Clic **Deploy** — Vercel détecte le `vercel.json` automatiquement

Le fichier `vercel.json` à la racine gère le routing SPA :
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

### Option 2 — Netlify

1. Pousse le projet sur GitHub
2. Sur [app.netlify.com](https://app.netlify.com) : **New site from Git**
3. Build command : `npm run build` — Publish directory : `dist`
4. Le fichier `public/_redirects` gère le routing SPA automatiquement

### Option 3 — VPS / Nginx

```bash
# Sur ton serveur
npm run build
scp -r dist/ user@serveur:/var/www/judo-quizz/

# Config Nginx
server {
    listen 80;
    server_name quizz-cd34.sharejudo.com;
    root /var/www/judo-quizz/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
}
```

Pour HTTPS (recommandé) :
```bash
certbot --nginx -d quizz-cd34.sharejudo.com
```

---

## Configuration DNS OVH

Pour pointer `quizz-cd34.sharejudo.com` vers ton hébergement :

### Si Vercel ou Netlify

1. Dans le dashboard Vercel/Netlify, ajoute le domaine personnalisé `quizz-cd34.sharejudo.com`
2. La plateforme te donne un enregistrement **CNAME** (ex: `cname.vercel-dns.com`)
3. Dans l'espace client OVH → **Web Cloud** → **Noms de domaine** → `sharejudo.com`
4. Onglet **Zone DNS** → **Ajouter une entrée** :
   - Type : `CNAME`
   - Sous-domaine : `quizz-cd34`
   - Cible : la valeur fournie par Vercel/Netlify (ex: `cname.vercel-dns.com.`)
   - TTL : 3600

### Si VPS (adresse IP fixe)

Dans l'espace client OVH → Zone DNS → **Ajouter une entrée** :
- Type : `A`
- Sous-domaine : `quizz-cd34`
- Cible : `XX.XX.XX.XX` (l'IP de ton VPS)
- TTL : 3600

⚠️ La propagation DNS peut prendre jusqu'à 24h.

---

## Logos et assets

Dépose les fichiers logos dans :

```
public/
  icons/
    icon-192.png   ← Logo CD34 carré 192×192 px (PNG)
    icon-512.png   ← Logo CD34 carré 512×512 px (PNG)
    favicon.svg    ← Favicon SVG (déjà fourni)
```

Le logo dans le header est actuellement un emoji 🥋. Pour le remplacer par le vrai logo CD34, modifie [`src/components/Header.tsx`](src/components/Header.tsx) :

```tsx
// Remplacer la ligne avec l'emoji par :
<img src="/icons/icon-192.png" alt="CD34" width={36} height={36} style={{ borderRadius: 6 }} />
```

---

## Ajouter / modifier des questions

Toutes les questions sont dans [`src/data/questions.ts`](src/data/questions.ts).

Structure d'une question :

```typescript
{
  id: 'h11',                              // identifiant unique
  text: 'Texte de la question ?',
  options: ['Réponse A', 'Réponse B', 'Réponse C', 'Réponse D'],  // exactement 4
  correctIndex: 0,                        // index de la bonne réponse (0, 1, 2 ou 3)
  explanation: 'Explication courte.',
  category: Category.HISTOIRE,            // voir l'enum Category
  level: Level.DEBUTANT,                  // DEBUTANT | INTERMEDIAIRE | CONFIRME
}
```

**Catégories disponibles :**
| Enum | Affichage |
|---|---|
| `Category.HISTOIRE` | Histoire du judo |
| `Category.CODE_MORAL` | Code moral |
| `Category.REGLES_DOJO` | Règles du dojo |
| `Category.GRADES_CEINTURES` | Grades et ceintures |
| `Category.VOCABULAIRE_JAPONAIS` | Vocabulaire japonais |
| `Category.ARBITRAGE_VIE` | Arbitrage & vie du club |

---

## Structure du projet

```
src/
  components/
    Header.tsx          Bandeau en-tête
    ProgressBar.tsx     Barre de progression
    QuizCard.tsx        Carte question + réponses
    ScoreResult.tsx     Résultat final + partage
  data/
    questions.ts        60 questions + sélecteurs
    revisionCards.ts    6 fiches de révision
  pages/
    HomePage.tsx        Accueil + sélection du mode
    QuizPage.tsx        Déroulement du quiz
    RevisionPage.tsx    Fiches de révision (accordéon)
    ResultPage.tsx      Score final
  types/
    quiz.ts             Types TypeScript + enums + labels
  App.tsx               Routing
  main.tsx              Point d'entrée + PWA
  index.css             Variables CSS + styles globaux
public/
  manifest.json         PWA manifest
  _redirects            Netlify SPA routing
  icons/                Logos et icônes
index.html
vite.config.ts
vercel.json             Vercel SPA routing
```

---

## Technologies

| Outil | Version |
|---|---|
| React | 19 |
| Vite | 6 |
| TypeScript | 5.7 (strict) |
| Tailwind CSS | 4 |
| react-router-dom | 7 |
| vite-plugin-pwa | 0.21 |

---

*Comité Départemental de Judo de l'Hérault — CD34*
