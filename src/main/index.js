const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
    win = new BrowserWindow({ width: 800, height: 600 });
    win.loadURL('http://localhost:5000');


    console.log(app.getPath('exe'))
    // console.log(process.execPath);
    // console.log(process.argv);
    // console.log(app.isDefaultProtocolClient('electron'))
    // if (!app.isDefaultProtocolClient('electron')) {
        // console.log(app.setAsDefaultProtocolClient('electron', app.getPath('exe')));
        // app.setAsDefaultProtocolClient('electron', app.getPath('exe'));
    // }
    // app.removeAsDefaultProtocolClient('electron');
});

// app.on('second-instance', (event, argv, workingDirectory) => {
//     const deeplinkingUrl = argv.slice(1);
//     console.log(deeplinkingUrl);
// });