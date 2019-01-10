import Login from '../../pages/login';
import Home from '../../pages/home';

import './main.scss';

class Main extends Component {
  renderContent() {
    const { user, onLogin, info } = this.props;
    return (
      <>
        <h2>{user ? `Hello, ${user.firstName}` : 'Login'}</h2>
        {
          user
            ? <>
              <Home user={user} info={info} />
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
