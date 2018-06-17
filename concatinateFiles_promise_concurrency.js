//This is an example for reading contents from 2 file names from commandline, concatenate and display on console
const fs = require('fs-extra');

const [, , ...tfiles] = process.argv;
const cwd = process.cwd() + '/';

const files = tfiles.map(file => cwd + file);
const content = [];

files.forEach(file => content.push(fs.readFile(file,'utf8')));

Promise.all(content)
    .then(result => console.log(`Concatenated data: ${result[0]} + ${result[1]} `));

