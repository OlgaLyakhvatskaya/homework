import ReactDom from 'react-dom';
import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';


const Wrapper = (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);
ReactDom.render(Wrapper, document.getElementById('app'));
