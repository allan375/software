const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

const isDev = process.env.IS_DEV === 'true' ? true : false

function createStartWindow(){
  const startWindow = new BrowserWindow({
    width: 730,
    height: 550,
    autoHideMenuBar: true,
    frame: false,
    show: false,
    icon: path.join(__dirname, 'icon.ico'),
    webPreferences: {
      nodeIntegration: false,
      webSecurity: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  startWindow.webContents.on('did-finish-load', () => {
    startWindow.show()
  })
  ipcMain.on('minimize-window', () => {
    startWindow.minimize()
  })
  ipcMain.on('close-window', () => {
    if(startWindow){
      startWindow.close()
    }
  })

  startWindow.loadURL(isDev ? 'http://localhost:5173/#/home' : `file://${path.join(__dirname, 'frontend/build/index.html')}`)
}

function createLoginWindow(){
  const startWindow = new BrowserWindow({
    width: 400,
    height: 450,
    autoHideMenuBar: true,
    frame: false,
    show: false,
    icon: path.join(__dirname, 'icon.ico'),
    webPreferences: {
      nodeIntegration: false,
      webSecurity: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  startWindow.webContents.on('did-finish-load', () => {
    startWindow.show()
  })
  ipcMain.on('minimize-window', () => {
    startWindow.minimize()
  })
  ipcMain.on('close-window', () => {
    if(startWindow){
      startWindow.close()
    }
  })

  startWindow.loadURL(isDev ? 'http://localhost:5173/#/login' : `file://${path.join(__dirname, 'frontend/build/index.html')}`)
}

function createMainWindow(){
  const mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    autoHideMenuBar: true,
    frame: false,
    show: false,
    icon: path.join(__dirname, 'icon.ico'),
    webPreferences: {
      nodeIntegration: false,
      webSecurity: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.show()
  })
  ipcMain.on('minimize-window', () => {
    mainWindow.minimize()
  })
  ipcMain.on('close-window', () => {
    if(mainWindow){
      mainWindow.close()
    }
  })

  mainWindow.loadURL(isDev ? 'http://localhost:5173/#/sistema' : `file://${path.join(__dirname, 'frontend/build/index.html#sistema')}`)
}

app.whenReady().then(() => {
  createStartWindow()
  createLoginWindow()
})