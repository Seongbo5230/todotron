const electron = require("electron");

const { app, BrowserWindow, Menu } = electron;

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/main.html`)

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

// Menu template
const menuTemplate = [
  {
    label: 'File',
    submenu: [
      { label: 'New Todo' },
      {
        label: 'Quit',
        accelerator: '',
        click() {
          app.quit();
        }
      }
    ]
  }
];

if (process.platform === 'darwin') {
  menuTemplate.unshift({});
}
