import './login.scss';
import { login } from '../../services';

const Login = ({ onLogin }) => {
  const onSubmit = (event) => {
    const { elements } = event.target;
    const data = {
      email: elements.email.value,
      password: elements.password.value
    };

    login(data).then(onLogin);

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

export default Login;
