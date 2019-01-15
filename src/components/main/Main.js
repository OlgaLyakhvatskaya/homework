import './main.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Main extends Component {
  render() {
    return (
      <main className="main">
        <div className="container">
          { this.props.children }
        </div>
      </main>
    );
  }
}

export default Main;
