export const CreateUser = (props) => {
  const { firstName } = props;
  const { lastName } = props;
  const { age } = props;
  return (
    <li>
      firstName = {firstName},
      age = {age},
      lastName = {lastName}
    </li>
  );
};

export default CreateUser;
