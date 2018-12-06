import CreateUser from '../createUser/index';
import './generate.scss';

export const Generate = (props) => {
  const { users } = props;
  return (
    <ul className="generate">
      {users.map(user => <CreateUser {...user} />)}
    </ul>
  );
};

export default Generate;
