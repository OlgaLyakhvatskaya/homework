import Form from '../../components/form';
import { addUser } from '../../services';

const CreateUser = ({ history }) => {
  const onSubmit = (data) => {
    addUser(data).then(() => history.push('/success'));
  };

  return (
    <>
      <h3>Create User</h3>
      <Form onSave={onSubmit} />
    </>
  );
};

export default CreateUser;
