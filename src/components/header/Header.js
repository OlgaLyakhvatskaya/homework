import Navigation from '../navigation';
import './header.scss';

const Header = ({ user, info }) => (
  <header className="header">
    <div className="container">
      <strong><a href="/">Logo</a></strong>
      <div className="userLogin">
        {
          user
            ? (
              <>
                <span>
                  {user.firstName}
                  {info && `(${info.categories}/${info.products})`}
                </span>
                <Navigation list={['Home', 'Products', 'Contacts']} />
              </>
            )
            : (
              <Navigation list={['SignIn', 'SignUp']} />
            )
        }
      </div>
    </div>
  </header>
);

export default Header;
