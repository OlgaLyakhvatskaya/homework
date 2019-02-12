import { connect } from 'react-redux';

import { updateUser } from '../../store/user';
import Form from '../../components/form';

class UpdateUser extends Component {
  onSubmit = (data) => {
    const { history } = this.props;
    const newUpData = {
      ...data,
      firstName: data.name,
      lastName: data.surname,
      password: data.password
    };

    this.props.dispatch(updateUser(newUpData));
    history.push('/successupdate');
  }

  render() {
    const { user } = this.props;

    const userDefaultValue = {
      email: user.email,
      name: user.firstName,
      surname: user.firstName
    };

    return (
      <>
        <h3>Update User</h3>
        <Form disabled={{ email: true }} data={userDefaultValue} onSave={this.onSubmit} />
      </>
    );
  }
}

const mapState = state => ({
  user: state.user
});

export default connect(mapState)(UpdateUser);
