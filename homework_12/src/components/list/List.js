import './list.scss';

const List = ({ items, handleClick }) => {
  const showUser = el => alert(el.username);
  return (
    items ? (
      <ul>
        {
          items.map(el => (
            <li key={el.id} onClick={() => showUser(el)}>{el.name}</li>
          ))
        }
      </ul>
    ) : null
  );
};

export default List;

