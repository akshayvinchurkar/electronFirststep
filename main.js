const electron = require('electron');
const os = require('os');
const fs = require('fs');
const path = require('path');

// use ipcRenderer to access All node and electron methods in html file
const {ipcRenderer} = electron;

// create ul, li and assign cpus function to normal variable
const ul = document.getElementById('list');
let cpus = os.cpus();

// simply get All cpus and iterate on it
cpus.forEach(cpu => {
    const li = document.createElement('li');
    let content = document.createTextNode(`CPU MODEL : ${cpu.model} CPU SPEED : ${cpu.speed} \n`);
    li.appendChild(content);
    ul.appendChild(li);
});

// create all variables
fileName = document.getElementById('fileName');
fileContent = document.getElementById('fileContent');
createFile = document.getElementById('createfile');
pathName = path.join(__dirname, 'Files');

createFile.addEventListener('click', (e) => {
    e.preventDefault();
    let file = path.join(pathName, fileName.value);
    let content = fileContent.value;
    fs.writeFile(file, content, (err) => {
        if (err) throw err;
        console.log('file is created');
    });
});