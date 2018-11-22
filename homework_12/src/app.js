import { header } from './js/header/header';
import { main } from './js/main/main';
import { footer } from './js/footer/footer';

import $ from 'jquery';
import './app.scss';

$('body').append(header, main, footer);


