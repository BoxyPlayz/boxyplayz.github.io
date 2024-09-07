const { app, BrowserWindow, nativeImage } = require('electron');
const path = require('node:path');

const createWindow = () => {
  const win = new BrowserWindow({
  width: 1280,
  height: 720,
  autoHideMenuBar: true,
  icon: "favicon.png"
})
win.setThumbarButtons([
  {
    tooltip: 'Search',
    icon: nativeImage.createFromPath(path.join(__dirname, 'Search.png')),
    click () {win.loadFile("search.html");}
  },
  {
    tooltip: 'Home',
    icon: nativeImage.createFromPath(path.join(__dirname, 'Home.png')),
    click () {win.loadFile("games.html");}
  }
])
    win.loadFile('games.html');
  }

  app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })