import { app, BrowserWindow,ipcMain, Tray, Menu } from 'electron'
const path = require('path')
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000,
    frame:false,
    webPreferences: {webSecurity: false},
	  //transparent:true
  })




	// 系统托盘右键菜单
	var trayMenuTemplate = [
		{
			label: '设置',
			click: function () {} // 打开相应页面
		},
		{
			label: '意见反馈',
			click: function () {}
		},
		{
			label: '帮助',
			click: function () {}
		},
		{
			label: '关于',
			click: function () {}
		},
		{
			label: '退出圣诞',
			click: function () {
				// ipc.send('close-main-window');
				app.quit()
			}
		}
	]

	const url = path.join(__dirname, '../../static/img/net.PNG')
	// 系统托盘图标
	let tray = new Tray(url)
	// 鼠标放到系统托盘图标上时的tips;
	tray.setToolTip('网易云音乐')
	// 图标的上下文菜单
	const contextMenu = Menu.buildFromTemplate(trayMenuTemplate)
	// 设置此图标的上下文菜单
	tray.setContextMenu(contextMenu)
	// 双击图片显示窗口
	tray.on('double-click', () => {
		mainWindow.show()
		mainWindow.focus()
	})


	mainWindow.loadURL(winURL)

	mainWindow.on('closed', () => {
		mainWindow = null
	})


}







app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
