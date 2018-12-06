export const CreateUser = (props) => {
  const { firstName, lastName, age } = props;
  return (
    <li>
      <span>Name: <strong>{firstName}</strong></span>
      <span>Last name: <strong>{lastName}</strong></span>
      <span>Age:<strong>{age}</strong></span>
    </li>
  );
};

export default CreateUser;
