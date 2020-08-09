# todotron

A todo app created via electron

---
## Notes on code for myself
- mainWindow will communicate to the electron app (ask for info about the video)
    - mainWindow (`ipcRenderer.send`) -> electron app (`ipcMain.on`)
- app will communicate back to mainWindow with info on the video via IPC
    - electron app (`mainWindow.webContents.send`) -> mainWindow (`ipcRenderer.on`)

## Logic workflow
1. `AddWindow` - "a new todo" -> `Electron App`
2. `Electron App` - "Tell `MainWindow` to show this on your list" -> `MainWindow`

---
### Initial Setup
`nvm install 14.7.0`
`nvm use --delete-prefix v14.7.0`
`npm init`

### npm packages
`npm install --save electron`

### Running electron
`"electron": "electron ."` inside `package.json`
Then, in CLI, run `npm run electron` -> `electron` here is referring to `electron` in `package.json` (line 7)

### `breaking app.on('ready', () => {});`
- `app` the thing we're listening to
- `ready` the event we're listening for
- `() => {}` the function to run when an event occurs
