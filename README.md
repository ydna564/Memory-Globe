# Global Memories

An interactive 3D memory globe that allows user to drop photos and notes onto coordinates on a
rotating Earth and revisit them in a circular gallery. Packaged as a cross-platform
desktop app with [Electron](https://www.electronjs.org/).

![Three.js](https://img.shields.io/badge/Three.js-r160-000000?logo=three.js)
![Electron](https://img.shields.io/badge/Electron-31-47848F?logo=electron&logoColor=white)

## Features

- 🌍 Photorealistic, rotating 3D Earth (Three.js + bloom post-processing)
- 📍 Click any coordinate to deposit a memory (photo + note)
- 🔎 Search any place by name and fly the camera to it
- 🖼️ Circular, draggable gallery to browse memories at a location
- 💾 **Persistent storage** via IndexedDB — memories survive restarts
- 🗑️ Delete memories you no longer want

## Getting started

```bash
npm install     # install dependencies
npm start       # launch the app
```

## Building a distributable

```bash
npm run dist    # build a .dmg (macOS) / installer (Windows)
npm run pack    # build an unpacked app directory (faster, for testing)
```

## Project structure

```
.
├── main.js              # Electron main process (creates the window)
├── preload.js           # contextIsolation preload bridge
├── package.json         # scripts + electron-builder config
└── renderer/
    └── index.html       # the app (Three.js globe + UI + persistence)
```

## Notes

- Three.js, Tailwind, Font Awesome, and the Earth textures load from CDNs, so an
  internet connection is required at runtime.
- Memories (including uploaded photos) are stored in the browser's IndexedDB,
  scoped to this app.

## License

MIT
