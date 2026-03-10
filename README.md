# 🏡 Latif Landmark Ltd. — React Vite Project

> **"Mark Your Space"** — Built with React + Vite

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (opens at http://localhost:3000)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 📁 Project Structure

```
latif-landmark/
├── index.html                  ← Vite entry HTML (root level)
├── vite.config.js              ← Vite configuration
├── package.json
├── public/
│   └── images/                 ← PUT YOUR PROPERTY PHOTOS HERE
│       ├── plot1-a.jpg
│       ├── plot1-b.jpg
│       └── ...
└── src/
    ├── main.jsx                ← App entry point
    ├── App.jsx
    ├── index.css               ← Global design system
    ├── assets/
    │   ├── logo-3.png          ← Navbar icon
    │   └── logo-full.png       ← Footer / drawer logo
    ├── data/
    │   └── properties.js       ← ✅ EDIT THIS for property listings
    └── components/
        ├── Navbar.jsx / .css
        ├── Hero.jsx / .css
        ├── Properties.jsx / .css
        ├── PropertyCard.jsx / .css
        ├── PropertyModal.jsx / .css
        ├── ImageSlider.jsx / .css  ← Reusable image slider
        ├── PlotMap.jsx / .css
        ├── Stats.jsx / .css
        ├── About.jsx / .css
        ├── Contact.jsx / .css
        └── Footer.jsx / .css
```

---

## 🖼️ Adding Property Images (Slider)

1. Put your photos in `public/images/`
2. Edit `src/data/properties.js`:

```js
{
  id: 1,
  title: "Duplex Province – Block A",
  images: [
    "/images/plot1-a.jpg",
    "/images/plot1-b.jpg",
    "/images/plot1-c.jpg"
  ],
  ...
}
```

---

## ⚡ Why Vite?

| Feature | CRA | Vite |
|---------|-----|------|
| Dev server start | ~10–30s | **< 1s** |
| Hot reload | Slow | **Instant** |
| Build speed | Slow | **3–5x faster** |
| Config | Complex | **Simple** |

---

*© 2024 Latif Landmark Ltd. All Rights Reserved.*
