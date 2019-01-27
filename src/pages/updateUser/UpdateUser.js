import Form from '../../components/form';

<<<<<<< Updated upstream
const UpdateUser = () => <Form />;
=======
const UpdateUser = () => {
  return (
    <>
      <h3>Update User</h3>
      <Form disabled={{ email: true }} />
    </>
  );
};
>>>>>>> Stashed changes

export default UpdateUser;
