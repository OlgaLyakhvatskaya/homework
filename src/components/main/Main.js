import './main.scss';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="container">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default Main;
