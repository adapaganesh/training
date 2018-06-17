//This is an example for reading contents from 2 file names from commandline, concatenate and display on console
const fs = require('fs-extra');

const [, , ...tfiles] = process.argv;
const cwd = process.cwd() + '/';

const files = tfiles.map(file => cwd + file);

fs.readFile(files[0], 'utf8')
    .then(file0 => {
        fs.readFile(files[1], 'utf8')
            .then(file1 => {
                console.log('file0 + file1 ', file0 + file1 );
            })
            .catch(err => console.log(`Error wile reading file: ${files[1]} \\n Error: ${err}`));
    })
    .catch(err => console.log(`Error wile reading file: ${files[0]} \\n Error: ${err}`));
