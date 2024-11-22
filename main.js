const { app, BrowserWindow, nativeImage } = require("electron");
const path = require("node:path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    autoHideMenuBar: true,
    icon: path.join("public", "favicon.png"),
  });
  win.setThumbarButtons([
    {
      tooltip: "Home",
      icon: nativeImage.createFromPath(
        path.join(__dirname, "public", "Home.png")
      ),
      click() {
        win.loadFile(path.join("public", "games.html"));
      },
    },
  ]);
  win.loadFile(path.join("public", "games.html"));
};

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
