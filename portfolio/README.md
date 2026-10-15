# 📼 Vintage VHS Spine 3D Interactive Portfolio

A minimalist, borderless 3D interactive VHS bookshelf component inspired by the vintage Akira Kurosawa VHS archive aesthetic (`image_e44a4b.jpg`).

## ✨ Features

- **Clean Visual Isolation**: Solid `#0a0a0a` dark minimalist background with zero table surfaces or cluttered background objects.
- **Borderless Cutout Aesthetic**: Edge-to-edge full-bleed cover artwork and realistic cutout black VHS cassette chassis with rotating spools and typed label.
- **CSS 3D Hardware Accelerated Hover**:
  - Starts as a horizontal shelf of vertical retro VHS spines.
  - On hover or navigation, smoothly expands using CSS 3D transforms (`perspective(1100px)`, `rotateY`) into a flat full-cover view with cassette sliding out.
- **Direct GitHub Repository Integration**:
  - Clicking any tape or project title instantly opens the live repository (`https://github.com/username/repo-name`) in a new tab (`target="_blank"`).
- **Minimalist Typography**: Clean layout focusing exclusively on project title, Japanese subtitle, release year, and tech stack tags.
- **Interactive Controls**:
  - Category filters: `ALL / すべて`, `MOBILE`, `FINTECH`, `SYSTEMS`, `WEB & UI`, `TRIBUTE`.
  - Arrow buttons (`←` and `→`) and global keyboard navigation (Left/Right arrow keys, Enter to launch repository).

---

## 🚀 Quick Setup & Mapping Your Repositories

All projects are configured in the `PROJECTS` array at the top of [`app.js`](./app.js):

```javascript
const PROJECTS = [
  {
    id: 'hanot-plus',
    title: 'HANOT+ (Hanout-Plus)',
    kanjiSubtitle: 'ハノートプラス / COMMERCIAL CREDIT APP',
    year: '2024',
    category: 'mobile',
    techStack: 'React Native • Expo Router • TypeScript • Express • MySQL',
    githubUrl: 'https://github.com/salouaulk3/Hanout-Plus',
    artImg: 'assets/art_hanot.jpg',
    studio: 'RETRO VIDEO',
    catalogCode: 'HP-8012',
    rating: 'G',
    spineBg: 'linear-gradient(180deg, #091e42 0%, #153b75 35%, #0e274f 70%, #051021 100%)'
  },
  // Add or edit your repositories here...
];
```

---

## 🌐 1-Click GitHub Pages Deployment

1. Create a repository on GitHub named `vhs-portfolio` (or `portfolio`).
2. Run the following commands in this directory:
   ```bash
   git init
   git add .
   git commit -m "feat: vintage 3d vhs bookshelf portfolio"
   git branch -M main
   git remote add origin https://github.com/salouaulk3/vhs-portfolio.git
   git push -u origin main
   ```
3. Go to **Repository Settings** > **Pages** > Set Branch to `main` (`/root`) and click **Save**.
4. Your interactive 3D bookshelf is live at `https://salouaulk3.github.io/vhs-portfolio/`!

---

## 📦 Embedding in Your Portfolio Website

```html
<iframe 
  src="https://salouaulk3.github.io/vhs-portfolio/" 
  width="100%" 
  height="620px" 
  style="border: none; overflow: hidden; background: #0a0a0a;" 
  title="Vintage VHS 3D Portfolio">
</iframe>
```
