//This is an example for reading contents from 2 file names from commandline, concatenate and display on console
const fs = require('fs-extra');

const [, , ...tfiles] = process.argv;
const cwd = process.cwd() + '/';

const files = tfiles.map(file => cwd + file);

fs.readFile(files[0], 'utf8', (err, file1) => {
    if (err)
        console.log(`Error while reading file: ${files[0]} \\n Error: ${err}`);
    else {
        fs.readFile(files[1], 'utf8', (err, file2) => {
            if (err)
                console.log(`Error while reading file: ${files[1]} \\n Error: ${err}`);
            else
                console.log('file1 + file2: ', file1 + file2);
        })
    }
});
