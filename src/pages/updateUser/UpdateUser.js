import Form from '../../components/form';
import { updateUser } from '../../services';

const UpdateUser = ({ history, data }) => {

  const onSubmit = (data) => {
    updateUser(data).then(() => history.push('/profile'));
  };

  return (
    <Form disabled={{ email: true }} user={data} onSave={onSubmit} />
  );
};

export default UpdateUser;
