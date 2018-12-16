import './form.scss';

class UserForm extends Component {
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

    this.fields.forEach(({ label }) => this.state[label] = '');
  }


  onChange = ({ target }) => {
    if (/checkbox|radio/i.test(target.type)) {
      this.setState({ [target.name]: target.checked });
    } else {
      this.setState({ [target.name]: target.value });
    }
  }

  render() {
    const { state } = this;
    return (
      <form className="form">
        { this.fields.map(field => <div className="wrapper"> <input type={field.secure ? 'password' : 'text'} name={field.label} placeholder={field.placeholder} value={state[field.label]} /></div>) }
      </form>
    );
  }
}

export default UserForm;
