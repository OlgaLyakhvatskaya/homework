import { NavLink } from 'react-router-dom';
import './navigation.scss';

export const Navigation = (props) => {
  const { list } = props;
  return (
    <nav className="index-menu">{list.map(item => <NavLink to={`/${item.toLowerCase()}`} key={item}>{item}</NavLink>)}</nav>
  );
};
export default Navigation;
