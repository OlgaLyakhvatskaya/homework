import ReactDom from 'react-dom';
import AppComponent from './appComponent';

import './app.scss';

const Wrapper = (
  <>
    <AppComponent />
  </>
);
ReactDom.render(Wrapper, document.getElementById('app'));
