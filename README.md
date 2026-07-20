# 🛡️ CryptEx

**Defining Security Standards for Web3 Systems.**

CryptEx is a modern, animated landing page for a DeFi security & tokenomics platform — built with React, Tailwind CSS, and GSAP for buttery-smooth, scroll-driven animations.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?logo=greensock&logoColor=white)

---

## ✨ Features

- 🎨 **Modern DeFi UI** — dark, glassmorphic design with gradient accents
- 🖱️ **Smooth Scrolling** — powered by [Lenis](https://github.com/darkroomengineering/lenis)
- 🎬 **Scroll-Triggered Animations** — every section animates in with [GSAP](https://gsap.com/) + `ScrollTrigger`
- 📱 **Fully Responsive** — mobile-first layout with an animated sidebar navigation
- 🧩 **Component-Based Architecture** — clean, reusable, and easy to extend
- ⚡ **Fast Dev Experience** — built on Vite for instant HMR

---

## 🗂️ Project Structure

```

src/
├── assets/               # Fonts & images
├── components/
│   ├── navbar/           # Sticky navbar with scroll hide/show + mobile sidebar
│   ├── header/           # Hero wrapper
│   ├── heroSection/      # Hero heading, stats counter, CTA button
│   ├── coreProducts/     # Product feature cards
│   ├── acquireCRX/       # Token purchase widget
│   ├── tokenomics/       # Tokenomics breakdown & features
│   ├── partners/         # Partner logo showcase
│   ├── testimonials/     # Team / testimonial carousel
│   ├── catBanner/        # Closing CTA banner
│   └── footer/           # Footer with newsletter signup
├── App.jsx
├── main.jsx              # Lenis + GSAP ScrollTrigger setup
└── App.css

````

---

## 🛠️ Tech Stack

| Category      | Tools                                    |
|---------------|------------------------------------------|
| Framework     | React 19 + Vite                          |
| Styling       | Tailwind CSS 4                           |
| Animation     | GSAP 3, `@gsap/react`, ScrollTrigger     |
| Smooth Scroll | Lenis                                    |
| Icons         | lucide-react                             |
| Linting       | ESLint 10                                |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
git clone <your-repo-url>
cd cryptex
npm install
````

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to view the app.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 🎬 Animation Notes

- **Lenis** is initialized once in `main.jsx` and synced with GSAP's `ScrollTrigger` for consistent smooth scrolling across the whole app.
- Each section component manages its own `useGSAP` timeline, scoped to that section, triggered via `ScrollTrigger` (`once: true`) so animations play once on scroll into view.
- Directional animations (elements entering from left/right) are used intentionally to reflect layout position — e.g. logo from the left, action buttons from the right.

---

## 📄 License

This project is private and intended for internal/demo use only.

---

<p align="center">Built Nayeem ❤️</p>