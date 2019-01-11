import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppComponent from './appComponent';

import './app.scss';

const Wrapper = (
  <BrowserRouter>
    <AppComponent />
  </BrowserRouter>
);
ReactDom.render(Wrapper, document.getElementById('app'));
