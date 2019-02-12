import { connect } from 'react-redux';

import { addUser } from '../../store/user';
import Form from '../../components/form';

class CreateUser extends Component {
  onSubmit = (data) => {
    const { history } = this.props;
    const newData = {
      ...data,
      firstName: data.name,
      lastName: data.surname
    };
    this.props.dispatch(addUser(newData));
    history.push('/success');
  };

  render() {
    return (
      <>
        <h3>Create User</h3>
        <Form onSave={this.onSubmit} />
      </>
    );
  }
}

export default connect()(CreateUser);
