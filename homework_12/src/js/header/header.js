import builder from '../elementBuilder';
const content = '<a href="/">Logo</a>';

import './header.scss';

export const header = builder(
'header', content, 'header'
);
 