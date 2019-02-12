import { NavLink } from 'react-router-dom';
import Navigation from '../navigation';

import './header.scss';

const Header = ({ user, info, onLogout }) => {
  const onLogoutHandler = () => {
    onLogout();
  };

  return (
    <header className="header">
      <div className="container">
        <strong><a href="/"><img src="/images/logo.png" alt="logo" /></a></strong>
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
              <>
                <Navigation list={['Home', 'Products', 'Categories']} />
                <div className="user-prof">
                  <NavLink to="/signin">SingIn</NavLink>
                  <NavLink to="/signup">SingUp</NavLink>
                </div>
              </>
            )
        }
      </div>
    </header>
  );
};

export default Header;
