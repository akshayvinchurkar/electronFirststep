const electron = require('electron');
const os = require('os');
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