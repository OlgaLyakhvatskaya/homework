
class FormInput extends Component {
  state = {
    print: false,
    value: 'Hello world!'
  }

  onShowInput = (e) => {
    this.setState(prev => ({ print: !prev.print }));
    this.props.func(e.target.value);
  }

  getValue = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value, print } = this.state;

    return (
      <>
        {
          print
            ? <input type="text" value={value} onChange={this.getValue} onBlur={this.onShowInput} autoFocus />
            : <span onClick={this.onShowInput}>{value}</span>
        }
      </>
    );
  }
}

export default FormInput;