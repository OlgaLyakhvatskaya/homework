import { connect } from 'react-redux';
import { login } from '../../store/user';

import './login.scss';

const Login = ({ dispatch }) => {
  const onSubmit = (event) => {
    const { elements } = event.target;
    const data = {
      email: elements.email.value,
      password: elements.password.value
    };

    dispatch(login(data));

    event.preventDefault();
  };

  return (
    <>
      <h3>Login</h3>
      <form className="login" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter email"
          name="email"
          defaultValue="admin@a.com"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          defaultValue="admin"
        />
        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default connect()(Login);
