const fs = require('file-system');

const date = new Date();
const dir = 'default/test.txt';
const now = date.toLocaleDateString();

fs.mkdir('default', () => {
    fs.writeFile(dir, `${now}`, () => {
        fs.readFile(dir, 'utf-8', (err, data) => {
            if (err) return console.log(err);
            console.log(data);
        });
    })
});