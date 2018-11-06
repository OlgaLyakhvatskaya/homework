const fs = require('fs');

const read = (name) =>  {
    return new Promise( (res, rej) => {
        fs.readFile(name, (err, data) => {
            if (err) return rej(err)
            res(data.toString('utf8'))
        })
    })
};


module.exports = read;
