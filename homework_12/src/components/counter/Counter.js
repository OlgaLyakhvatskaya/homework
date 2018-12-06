export default class Counter extends Component {
  state = { counter: 0 }

  clickHandler = () => {
    const { counter } = this.state;

    this.setState((state, props) => {
      console.log(state, props)
      return {counter: counter + 1} 
    });
  }

  render() {
    const { counter } = this.state;
    return (
      <div className="counter">
        <button onClick={this.clickHandler}>Increase</button> <span>{counter}</span>
      </div>
    );
  }
}
 