const builder = require('../elementBuilder');
const date = new Date();
const caption = '<h1>Hello</h1>'
const content = caption + date.toLocaleDateString();

module.exports = builder(
'main', content, 'main'
);
 