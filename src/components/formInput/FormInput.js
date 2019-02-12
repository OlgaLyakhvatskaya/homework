import { connect } from 'react-redux';

import './formInput.scss';

class FormInput extends Component {
  state = {
    print: false,
    value: ''
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.buttonClick) {
      return { print: true };
    }
    if (!nextProps.buttonClick) {
      return { print: false };
    }
    return null;
  }

  onShowForm = (event) => {
    const { value } = this.state;
    const { addOnBlure } = this.props;
    if (event.type === 'blur' && addOnBlure) {
      addOnBlure(value);
    }
  }

  getValue = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value, print } = this.state;
    const { rows, item, user } = this.props;
    let rowsType;
    rows
      ? rowsType = <textarea type="text" value={value || item || ''} onChange={this.getValue} onBlur={this.onShowForm} autoFocus>{value}</textarea>
      : rowsType = <input type="text" value={value || item || ''} onChange={this.getValue} onBlur={this.onShowForm} autoFocus />;

    return (
      <>{
        user && print
          ? rowsType
          : <span onClick={this.onShowForm} className={value ? 'hasValue' : 'noValue'}>{value || item}</span>
        }
      </>
    );
  }
}

const mapState = state => ({
  user: state.user
});

export default connect(mapState)(FormInput);
