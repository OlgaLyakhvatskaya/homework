import './formInput.scss';

class FormInput extends Component {
  state = {
    print: false,
    value: ''
  }

  onShowForm = () => {
    this.setState(prev => ({ print: !prev.print }));
  }

  getValue = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value, print } = this.state;
    const { rows, item } = this.props;
    let rowsType;

    rows
      ? rowsType = <textarea type="text" value={value} onChange={this.getValue} onBlur={this.onShowForm} autoFocus>{value}</textarea>
      : rowsType = <input type="text" value={value || item} onChange={this.getValue} onBlur={this.onShowForm} autoFocus />;

    return (
      <>{
          print
            ? rowsType
            : <span onClick={this.onShowForm} className={value ? 'hasValue' : 'noValue'}>{value || item}</span>
        }
      </>
    );
  }
}

export default FormInput;
