import './main.scss';
// import Form from '../form';
import FormInput from '../formInput';

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
          <FormInput />
          {/* <Form /> */}
        </div>
      </main>
    );
  }
}

export default Main;
