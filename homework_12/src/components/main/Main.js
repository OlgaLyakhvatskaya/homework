import './main.scss';
import Aside from '../aside/index';
import Hello from '../hello/index';
import List from '../list/index';
import Generate from '../generate/index';
import Counter from '../counter/index';
import ListSort from '../listsort/index';

const listUsers = [
  { firstName: 'Teresa', lastName: 'Testva', age: 46 },
  { firstName: 'John', lastName: 'Testov', age: 100 }
];
class Main extends React.Component {
  state = { users: [] }

  constructor(props) {
    super(props);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }

  showUserName(username) {
    alert(username);
  }
  showUserInfo(user) {
    alert(user.username)
  }

  render() {
    const { title } = this.props;
    const { users } = this.state;
    return (
      <main className="main">
        <div className="container">
          <Aside />
          <div className="content">
            <p>{title}</p>
            <Counter />
            <Hello date={new Date().getHours()} name="Olga" />
            <List items={users} handleClick={this.showUserInfo} />
            <ListSort from="10" to="30" even />
            <Generate users={listUsers} />
          </div>
        </div>
      </main>
    );
  };
}

export default Main;
