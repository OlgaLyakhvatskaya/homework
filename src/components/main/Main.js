import Login from '../../pages/login';
import Home from '../../pages/home';
import Product from '../product';
import ProductList from '../productsList';


import './main.scss';

class Main extends Component {
  renderContent() {
    const { user, onLogin, info, list } = this.props;
    return (
      <>
        <h2>{user ? `Hello, ${user.firstName}` : 'Login'}</h2>
        {
          user
            ? <>
              <Home user={user} info={info} />
              <Product />
              <ProductList list={list} />
            </>
            : <Login onLogin={onLogin} />
        }
      </>
    );
  }

  render() {
    const { loading } = this.props;

    return (
      <main className="main">
        <div className="container">
          { loading ? 'Loading...' : this.renderContent() }
        </div>
      </main>
    );
  }
}

export default Main;
