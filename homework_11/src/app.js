const header = require('./js/header/header');
const footer = require('./js/footer/footer');
const main = require('./js/main/main');
const $ = require('jquery');

require('./app.scss');

$('body').append(header, main, footer);


