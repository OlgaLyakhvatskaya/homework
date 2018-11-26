import builder from '../elementBuilder';
import './main.scss';

const date = new Date();
const caption = '<h1>Hello</h1>'
const content = `<div class="content"> ${caption} ${date.toLocaleDateString()} </div>`;

export const main = builder(
'main', content, 'main'
);
