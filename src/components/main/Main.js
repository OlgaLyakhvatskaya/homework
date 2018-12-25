import './main.scss';
import Login from '../../pages/login';
import { checkUser } from '../../services';

class Main extends Component {
  state = {
    user: null,
    loading: true,
  }

  componentDidMount() {
    checkUser()
      .then(user => this.setState({ loading: false, user }))
      .catch(() => this.setState({ loading: false }));
  }

  onLogin = (user) => {
    this.setState({ user });
  }

  render() {
<<<<<<< HEAD
    const { user } = this.state;
    return (
      <main className="main">
        <div className="container">
          <h2>{user ? `Hello, ${user.lastName}` : 'Login'}</h2>
          {
            user 
              ? <p>text</p>
              : <Login onLogin={this.onLogin} />
          }
>>>>>>> Stashed changes
=======
    const fn = text => console.log(text);

    return (
      <main className="main">
        <div className="container">
          <FormInput props={fn} />
          {/* <Form /> */}
>>>>>>> 4873bef25164574d17fdf6b0010994e6a5e53c09
        </div>
      </main>
    );
  }
}

export default Main;
