import './main.scss';

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
