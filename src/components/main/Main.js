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
    const fn = text => console.log(text);

    return (
      <main className="main">
        <div className="container">
          <FormInput props={fn} />
          {/* <Form /> */}
        </div>
      </main>
    );
  }
}

export default Main;
