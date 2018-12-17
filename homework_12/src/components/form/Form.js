import './form.scss';

class UserForm extends Component {
  static getDerivedStateFromProps({ data }, currentState){
    if (!data) return null;

    const props = Object.entries(data);
    const isStateEmpty = props.every(([key]) => !currentState[key].value);

    if (isStateEmpty) {
      const state = {};

      props.forEach(([key, value]) => state[key] = { value, error: '' })

      return state;
        // email: { value: data.email, error: '' },
        // name:  { value: data.name, error: '' },
        // user:  { value: data.user, error: '' }
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.fields = [
      { label: 'email', reg: /^\w+@\w+\.[a-z]{2,}$/, placeholder: "E-mail" },
      { label: 'name', reg: /^[^ ]{3,20}$/, placeholder: "Name" },
      { label: 'surname', reg: /^[^ ]{3,20}$/, placeholder: "Login"  },
      { label: 'password', reg: /^[^ ]{6,20}$/, secure: true, placeholder: "Password"  },
      { label: 'repeatPassword', reg: /^[^ ]{6,20}$/, secure: true, placeholder: "Repeat password"  }
    ];
    this.state = {};

    this.fields.forEach(({ label }) => this.state[label] = {
      value: '',
      error: ''
    });
  }

  onChange = ({ target }) => {
    const field = this.state[target.name]

    if (/checkbox|radio/i.test(target.type)) {
      this.setState({ [target.name]: {...field, value: target.checked} })
    } else{
      this.setState({ [target.name]: {...field, value: target.value} })
    }
  }

  validate = ({ target }) => {
    const field = this.fields.find(item => item.label === target.name);
    const stateField = this.state[target.name];
    let error = '';

    if (target.value.lenght === 0 || !field.reg.test(target.value)) {
      error = 'Is not valid';     
    } else {
      error = '';
    }

    if (target.name === 'repeatPassword' && this.state.password.value !== target.value) {
      error = 'Passwords are not equled'
      
    }
    this.setState({ [target.name]: { ...stateField, error } });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const data = {};

    Object.entries(this.state).forEach(([key, { value }]) => data[key] = value)
    if (this.props.onSave) {
      this.props.onSave(data);
    }
    // console.log(data);
  }

  getButtonState = () => {
    return Object.entries(this.state).some(([key, { error, value }]) => error || !value)
  }

  render() {
    const { state } = this
    return (  
      <form className="form" onSubmit={this.onSubmit}>
        {
          this.fields.map(field => 
            <div className="wrapper">
              <input  
                type={field.secure ? 'password' : 'text'} 
                name={field.label} 
                value={state[field.label].value}
                placeholder={field.placeholder}
                onChange={this.onChange}
                onBlur={this.validate}
              />
              {state[field.label].error && 
              <mark>{state[field.label].error}</mark>}
            </div>)
        }
        <input 
          type="submit" 
          disabled={this.getButtonState()}
          value="Send" 
        />
      </form>
    );
  }
}

export default UserForm;
