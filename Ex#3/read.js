const fs = require('fs');

const read = (name, cb) =>  fs.readFile(name, (err, data) => {
    return new Promise((res, rej) => {
        res(cb(data.toString('utf8')))
        rej(err);
    })
})

module.exports = read;
