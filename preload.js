// Minimal preload. The renderer is self-contained (Three.js via CDN) and uses
// IndexedDB for persistence, so no privileged bridge is required yet.
// This file exists so contextIsolation has a defined preload entry point and
// gives us a place to expose native APIs later if needed.
window.addEventListener('DOMContentLoaded', () => {
  // no-op
});
