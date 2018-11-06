const read = require('./read');

read('name.txt')
    .then(text => console.log(text))
    .catch(err => console.log(err));