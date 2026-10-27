const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    autoHideMenuBar: true,
    icon: path.join(__dirname, 'images/icon.png'),
    // titleBarStyle: "hidden",
    webPreferences: {
      webviewTag: true, // Required for <webview>
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.loadFile('index.html');



mainWindow.webContents.on('did-attach-webview', (event, webContents) => {
  webContents.setWindowOpenHandler((details) => {
    // Send URL to Renderer Process instead of opening a new native window
    mainWindow.webContents.send('open-new-tab', details.url);
    return { action: 'deny' }; // Prevent native window
  });
});

}


app.on('web-contents-created', (event, contents) => {
  
app.on('web-contents-created', (event, contents) => {
  contents.setWindowOpenHandler(({ url }) => {
    const mainWindow = BrowserWindow.getAllWindows()[0];
    if (mainWindow) {
      mainWindow.webContents.send('open-new-tab', url);
    }


    return { action: 'deny' }; 
  });



  
});

});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

ipcMain.on('close-app', () => {
  app.quit();
});
