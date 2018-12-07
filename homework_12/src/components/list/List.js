import './list.scss';

const List = (props) => {
  const { from, to, even, odd } = props;
  const array = [];
  const createLi = item => <li key={item}>{item}</li>;
  for (let i = +from; i <= +to; i++) {
    if (!even && !odd) array.push(i);
    if (even && i % 2 === 0) array.push(i);
    if (odd && i % 2) array.push(i);
  }
  return <ul>{ array.map(createLi) }</ul>;
};

export default List;
