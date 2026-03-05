# Justin Pescador — Portfolio

Terminal-style bilingual (EN/FR) portfolio built with React + Vite.

## 🚀 Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## 📦 Deploy to GitHub Pages

### 1. Create a GitHub repo named `justin-portfolio`

### 2. Push your code
```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/justin-portfolio.git
git push -u origin main
```

### 3. Deploy
```bash
npm run deploy
```

### 4. Enable GitHub Pages
Go to your repo → **Settings** → **Pages** → Branch: **gh-pages** → Save.

Your site will be live at: `https://YOUR_USERNAME.github.io/justin-portfolio/`

> ⚠️ After deploying, update `base` in `vite.config.js` to match your exact repo name.

## 📁 Project structure

```
src/
  components/
    BootHeader.jsx   # Animated boot sequence
    AsciiHero.jsx    # ASCII art name banner
    About.jsx        # Profile summary
    Skills.jsx       # Skills table
    Projects.jsx     # Project log cards
    Education.jsx    # Education record
    Languages.jsx    # Language proficiency bars
  App.jsx            # Main app + language toggle
  App.css            # All styles
index.html           # Entry HTML (Google Fonts here)
vite.config.js       # Vite config with GitHub Pages base path
```
