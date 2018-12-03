import './main.scss';
import Aside from '../aside/Aside';

const Main = () => (
  <main className="main">
    <div className="container">
      <Aside />
      <div className="content">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
    </div>
  </main>
);

export default Main;
