import './list.scss';

const List = (props) => {
  const { from } = props;
  const { to } = props;
  const { even } = props;
  const { odd } = props;
  const array = [];

  for (let i = +from; i <= +to; i++) {
    array.push(i);
  }
  if (even) {
    return (
      <ul>
        {array.filter(item => item % 2 === 0).map(item => <li key={item}>{item}</li>)}
      </ul>
    );
  }
  if (odd) {
    return (
      <ul>
        {array.filter(item => item % 2).map(item => <li key={item}>{item}</li>)}
      </ul>
    );
  }
  return (
    <ul>
      {array.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
};

export default List;
