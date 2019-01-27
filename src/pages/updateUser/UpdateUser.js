import Form from '../../components/form';

const UpdateUser = () => {
  return (
    <>
      <h3>Update User</h3>
      <Form disabled={{ email: true }} />
    </>
  );
};

export default UpdateUser;
