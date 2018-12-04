import CreateUser from '../createUser/index';

export const Generate = (props) => {
  const { users } = props;
  return (
    <ul>
      {users.map(user => <CreateUser {...user} />)}
    </ul>
  );
};

export default Generate;
