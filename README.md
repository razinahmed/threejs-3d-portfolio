<div align="center">

<img src="https://placehold.co/900x200/0a0a23/00d4ff.png?text=Three.js+3D+Portfolio&font=Montserrat" alt="Three.js 3D Portfolio Banner" width="100%" />

# Three.js 3D Portfolio

**A stunning 3D developer portfolio built with Three.js and React Three Fiber — interactive 3D scenes, particle effects, scroll-driven animations, and responsive design.**

[![Three.js](https://img.shields.io/badge/Three.js-r162-000000?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![React Three Fiber](https://img.shields.io/badge/R3F-8.15-000000?style=for-the-badge&logo=threedotjs&logoColor=white)](https://docs.pmnd.rs/react-three-fiber/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)](LICENSE)

[Live Demo](#) · [Features](#-features) · [Tech Stack](#-tech-stack) · [Getting Started](#-getting-started) · [Contributing](#-contributing)

</div>

---

## :sparkles: Features

| Feature | Description |
|---|---|
| :art: **Interactive 3D Scenes** | Fully interactive Three.js scenes with orbit controls, lighting, and custom geometries |
| :dizzy: **Particle Systems** | Dynamic particle effects with GPU-accelerated rendering and custom shaders |
| :scroll: **Scroll Animations** | Scroll-driven 3D transitions powered by Framer Motion and R3F scroll controls |
| :envelope: **Contact Form** | Functional contact form with EmailJS integration and form validation |
| :crescent_moon: **Dark/Light Mode** | Theme switching with smooth transitions and persisted preferences |
| :iphone: **Mobile Responsive** | Adaptive 3D complexity for mobile devices with touch gesture support |
| :racing_car: **Performance Optimized** | Lazy loading, instanced meshes, LOD, and automatic quality downscaling |
| :mag: **SEO Meta Tags** | Open Graph, Twitter Cards, JSON-LD structured data for search visibility |

---

## :hammer_and_wrench: Tech Stack

| Technology | Purpose |
|---|---|
| ![React](https://img.shields.io/badge/React-61dafb?style=flat-square&logo=react&logoColor=black) | UI framework |
| ![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=threedotjs&logoColor=white) | 3D graphics engine |
| ![React Three Fiber](https://img.shields.io/badge/R3F-000000?style=flat-square&logo=threedotjs&logoColor=white) | React renderer for Three.js |
| ![Drei](https://img.shields.io/badge/Drei-a855f7?style=flat-square&logo=threedotjs&logoColor=white) | Useful R3F helpers and abstractions |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white) | Utility-first CSS framework |
| ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white) | Animation library |
| ![EmailJS](https://img.shields.io/badge/EmailJS-f59e0b?style=flat-square&logo=maildotru&logoColor=white) | Client-side email sending |

---

## :package: Installation

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x or **yarn** >= 1.22

### Getting Started

```bash
# Clone the repository
git clone https://github.com/razinahmed/threejs-3d-portfolio.git

# Navigate to the project
cd threejs-3d-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## :open_file_folder: Project Structure

```
threejs-3d-portfolio/
├── public/
│   ├── models/
│   │   ├── computer.glb
│   │   └── planet.glb
│   ├── textures/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── canvas/
│   │   │   ├── Stars.jsx
│   │   │   ├── ComputerModel.jsx
│   │   │   └── Earth.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/
│   │       ├── Navbar.jsx
│   │       ├── ThemeToggle.jsx
│   │       └── Loader.jsx
│   ├── hooks/
│   │   ├── useTheme.js
│   │   └── useMediaQuery.js
│   ├── constants/
│   │   ├── index.js
│   │   └── config.js
│   ├── utils/
│   │   ├── motion.js
│   │   └── seo.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
├── index.html
└── package.json
```

---

## :zap: Usage

### Adding a New 3D Scene

```jsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

function CustomScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars radius={100} depth={50} count={5000} fade speed={1} />
      <mesh>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial color="#8b5cf6" wireframe />
      </mesh>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
```

### Scroll-Driven Animation

```jsx
import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '../utils/motion';

function ProjectCard({ title, description, image, index }) {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}
```

### Performance Tips

- Use `useGLTF.preload()` for 3D model pre-loading
- Set `frameloop="demand"` on Canvas for static scenes
- Use `<Suspense>` with `<Loader />` for progressive loading
- Reduce particle count on mobile via `useMediaQuery`

---

## :handshake: Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch — `git checkout -b feature/new-section`
3. **Commit** your changes — `git commit -m "feat: add new 3D section"`
4. **Push** to the branch — `git push origin feature/new-section`
5. **Open** a Pull Request

Please ensure 3D models are optimized (< 5MB) and compressed with `gltf-pipeline`.

---

## :scroll: License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with :heart: by [Razin Ahmed](https://github.com/razinahmed)**

`Three.js` `3D Portfolio` `WebGL` `React Three Fiber` `Developer Portfolio` `Interactive Website` `3D Web`

</div>
