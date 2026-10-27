const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  onOpenNewTab: (callback) => ipcRenderer.on('open-new-tab', (event, url) => callback(url))
});