import './main.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Main extends Component {
  render() {
    return (
      <>
        { this.props.children }
      </>
    );
  }
}

export default Main;
