
class Stopwatch extends Component {
  state = {
    dateWithInterval: ''
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.getDateFun();
    }, 1000);
  }

  getDateFun = () => {
    const timer = new Date().toLocaleString();

    this.setState({
      dateWithInterval: timer
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {
    const { dateWithInterval } = this.state;

    return (
      <>
        <p>{dateWithInterval}</p>
        <button type="button" onClick={() => this.componentWillUnmount()}>Clear interval</button>
      </>
    );
  }
}

export default Stopwatch;
