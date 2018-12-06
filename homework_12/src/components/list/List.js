import './list.scss';

const List = (props) => {
  const { from, to, even, odd } = props;
  const array = [];

  for (let i = +from; i <= +to; i++) {
    array.push(i);
  }
  return (
    <ul>{
      even
        ? array.filter(item => item % 2 === 0).map(item => <li key={item}>{item}</li>)
        : odd
          ? array.filter(item => item % 2).map(item => <li key={item}>{item}</li>)
          : array.map(item => <li key={item}>{item}</li>)
    }
    </ul>
  );
};

export default List;
