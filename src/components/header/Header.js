import Navigation from '../navigation';
import './header.scss';

const Header = () => (
  <header className="header">
    <div className="container">
      <strong><a href="/">Logo</a></strong>
      <Navigation list={['Home', 'Products', 'Contacts']} />
    </div>
  </header>
);

export default Header;