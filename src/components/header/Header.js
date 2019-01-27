import Navigation from '../navigation';

import './header.scss';

<<<<<<< Updated upstream
const Header = ({ user, info }) => (
  <header className="header">
    <div className="container">
      <strong><a href="/"><img src="./images/logo.png" alt="logo" /></a></strong>
      {
        user
          ? (
            <>
              <Navigation list={['Products', 'Products', 'Profile']} />
              <span>
                {user.firstName}
                {info && `(${info.categories}/${info.products})`}
              </span>
            </>
          )
          : (
            <Navigation list={['SignIn', 'SignUp']} />
          )
      }
    </div>
  </header>
);
=======
const Header = ({ user, info, onLogout }) => {
  const onLogoutHandler = () => {
    onLogout();
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
>>>>>>> Stashed changes

export default Header;
