const fs = require('fs');

const read = (name) =>  new Promise( (res, rej) => {
    fs.readFile(name, (err, data) => {
        if (err) return rej(err)
        res(data.toString('utf8'))
     })
})


module.exports = read;
