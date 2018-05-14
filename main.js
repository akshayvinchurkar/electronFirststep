const electron = require('electron');
const fs = require('fs');
const path = require('path');

// use ipcRenderer to access All node and electron methods in html file
const {ipcRenderer} = electron;

// create all variables
fileName = document.getElementById('fileName');
fileContent = document.getElementById('fileContent');
createFile = document.getElementById('createfile');
successMsg = document.getElementById('successMsg');
pathName = path.join(__dirname, 'Files');

createFile.addEventListener('click', (e) => {
    e.preventDefault();
    // check to see if file exist in directory or not
    if(!fs.existsSync(pathName)) {
        fs.mkdirSync(pathName);
        createFileForMe();
    } else {
        createFileForMe();
    }
});

createFileForMe = () => {
    let file = path.join(pathName, fileName.value);
    let content = fileContent.value;
    if(fs.existsSync(file)) {
        successMsg.textContent = "File is Exist";
        successMsg.style.opacity = 1;
        successMsg.classList.add('text-negative');
    } else {
        fs.writeFile(file, content, (err) => {
            if (err) throw err;
            successMsg.textContent = "File Created";
            successMsg.style.opacity = 1;
            successMsg.classList.add('text-positive');
        });
    }
}