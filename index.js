const { app, BrowserWindow, Menu, dialog } = require('electron')
const path = require('path')
const url = require('url')

const createWindow = () => {
    // Create the browser window.
    win = new BrowserWindow({ 
        width: 800, 
        height: 600, 
        title:'Akshay',
        icon: 'img/logo.png' 
    });

    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    const Mainmenu = Menu.buildFromTemplate(menu);
    Menu.setApplicationMenu(Mainmenu);
};

const menu = [
    {
        label: 'file',
        submenu: [
            {
                label: 'New File',
                click() {
                    dialog.showOpenDialog({properties: ['openFile']});
                }
            },
            {
                label: 'Open devtools',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            }
        ]
    }
];

app.on('ready', createWindow)