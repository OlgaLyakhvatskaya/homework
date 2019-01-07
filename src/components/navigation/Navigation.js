import './navigation.scss';

export const Navigation = (props) => {
  const { list } = props;
  return (
    <nav className="index-menu">{list.map(item => <a href={`/${item.toLowerCase()}`} key={item}>{item}</a>)}</nav>
  );
};
export default Navigation;
