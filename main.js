const path = require('path');
const glob = require('glob');
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;



let mainWindow;
let debug = false;

function initialize() {
    loadModules();

    function createWindow() {
        mainWindow = new BrowserWindow({ width: 1300, height: 900 });
        mainWindow.loadURL(`file://${__dirname}/index.html`)

        mainWindow.on('closed', function() {
            mainWindow = null;
        });

        if (debug) {
            mainWindow.webContents.openDevTools();
            //mainWindow.maximize();
        }
    }

    app.on('ready', createWindow);

    app.on('window-all-closed', function() {
        if (process.platform != 'darwin') {
            app.quit();
        }
    });

    app.on('activate', function() {
        if (mainWindow == null) {
            createWindow();
        }
    })
};

function loadModules() {
    var files = glob.sync(path.join(__dirname, 'src/electron/*.js'))
    files.forEach(function(file) {
        require(file)
    });
}

switch (process.argv[1]) {
    default: initialize();
}