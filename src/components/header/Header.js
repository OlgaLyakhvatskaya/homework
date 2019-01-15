import { NavLink } from 'react-router-dom';
import Navigation from '../navigation';
import { logout } from '../../services';

import './header.scss';

const Header = ({ user, info, onLogout, history }) => {
  const onLogoutHandler = () => {
    logout().then(onLogout).then(() => history.push('/'));
  };

  return (
    <header className="header">
      <div className="container">
        <strong><a href="/"><img src="./images/logo.png" alt="logo" /></a></strong>
        {
          user
            ? (
              <>
                <Navigation list={['Home', 'Products', 'Categories']} />
                <div className="user-prof">
                  {user.firstName}
                  {info && `(${info.categories}/${info.products})`}
                  <ul className="user-menu">
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><button type="button" onClick={onLogoutHandler}>Logout</button></li>
                  </ul>
                </div>
              </>
            )
            : (
              <Navigation list={['SignIn', 'SignUp']} />
            )
        }
      </div>
    </header>
  );
};

export default Header;
