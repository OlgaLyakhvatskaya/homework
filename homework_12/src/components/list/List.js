import './list.scss';

const List = (props) => {
  const { from, to, even, odd } = props;
  const array = [];
  const createLi = item => <li key={item}>{item}</li>;
  let result;

  for (let i = +from; i <= +to; i++) {
    array.push(i);
  }

  if (even) {
    result = array.filter(item => item % 2 === 0).map(createLi);
  }
  if (odd) {
    result = array.filter(item => item % 2).map(createLi);
  }
  if (!even && !odd) {
    result = array.map(createLi);
  }
  return <ul>{ result }</ul>;
};

export default List;
