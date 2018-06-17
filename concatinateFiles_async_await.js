//This is an example for reading contents from 2 file names from commandline, concatenate and display on console
const fs = require('fs-extra');

const [, , ...tfiles] = process.argv;
const cwd = process.cwd() + '/';
const content = [];

const files = tfiles.map(file => cwd + file);

const readFiles = files => {
    files.forEach(file => {
        try {
            content.push(fs.readFile(file, 'utf8'));
        } catch (e) {
            console.log('error while reading file ', file);
        }
    });
};

readFiles(files);
Promise.all(content)
    .then(result => {
        console.log('Concatenated content: ', result.join());
    })
    .catch(err => console.log('err ', err));

    

