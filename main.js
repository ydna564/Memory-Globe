const { app, BrowserWindow, shell, nativeImage } = require('electron');
const path = require('path');

const iconPath = path.join(__dirname, 'build', 'icon.png');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 860,
    minWidth: 720,
    minHeight: 560,
    backgroundColor: '#000000',
    title: 'Global Memories',
    icon: iconPath,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  win.loadFile(path.join(__dirname, 'renderer', 'index.html'));

  // Open external links (e.g. unsplash) in the user's browser, not in-app.
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http')) {
      shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
  });
}

app.whenReady().then(() => {
  // Set the dock icon on macOS (relevant when running unpackaged via `npm start`)
  if (process.platform === 'darwin' && app.dock) {
    app.dock.setIcon(nativeImage.createFromPath(iconPath));
  }

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
