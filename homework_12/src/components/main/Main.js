import './main.scss';
import Form from '../form';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <main className="main">
        <div className="container">
          <Form />
        </div>
      </main>
    );
  }
}

export default Main;
