import '@babel/polyfill';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppComponent from './AppComponent';
import store, { runSaga } from './store';

import './app.scss';

runSaga();

const Wrapper = (
  <Provider store={store}>
    <BrowserRouter>
      <AppComponent />
    </BrowserRouter>
  </Provider>
);

if (module.hot) {
  module.hot.accept();
}

ReactDom.render(Wrapper, document.getElementById('app'));
