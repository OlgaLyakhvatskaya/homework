import Navigation from '../navigation';

import './header.scss';

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

export default Header;
