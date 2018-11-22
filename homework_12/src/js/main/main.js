import builder from '../elementBuilder';
const date = new Date();
const caption = '<h1>Hello</h1>'
const content = `<div class="content"> ${caption} ${date.toLocaleDateString()} </div>`;
import './main.scss';

export const main = builder(
'main', content, 'main'
);
