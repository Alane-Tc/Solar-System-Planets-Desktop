const { app, BrowserWindow } = require('electron');

function crearVentanaPrincipal() {
    let ventanaPrincipal = new BrowserWindow({
        minWidth: 850, maxHeight: 1400,
        show: false,
        icon: __dirname + `./src/public/img/logo.icns`,
        icon: __dirname + `./src/public/img/favicon-32x32.ico`,
        webPreferences: {
            nodeIntegration: true
        }
    });
    ventanaPrincipal.maximize();
    //ventanaPrincipal.show();
    ventanaPrincipal.title = 'Sistema Solar'
    //ventanaPrincipal.setMenu(null);
    ventanaPrincipal.loadFile(`src/index.html`); 
}

app.whenReady().then(crearVentanaPrincipal);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
        crearVentanaPrincipal();
    }
});