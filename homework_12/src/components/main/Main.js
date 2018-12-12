import './main.scss';
import Aside from '../aside/index';
import Hello from '../hello/index';
import List from '../list/index';
import Generate from '../generate/index';
import Counter from '../counter/index';
import UserForm from '../form/index';

class Main extends React.Component {
  state = { users: [] }

  render() {
    return (
      <main className="main">
        <div className="container">
          <UserForm />
        </div>
      </main>
    );
  };
}

export default Main;
