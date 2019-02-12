import { connect } from 'react-redux';
import { Modal } from '../modal';

import './buttonsActions.scss';

class ButtonsActions extends Component {
  state = {
    itemId: ''
  }

  onDelete = (itemId) => {
    this.setState({ itemId });
  }

  onClose = () => {
    this.setState({ itemId: '' });
  }

  onOk = () => {
    this.props.removeItem(this.state.itemId);
  }

  render() {
    const { user, idItem, idTitle, itemState, getInput } = this.props;
    const { itemId } = this.state;
    return (
      user
        && (
          <>
            <div className="buttons">
              <button type="button" className="delete" onClick={() => this.onDelete(idItem)}>
                <img src="./images/clear.svg" alt="" />
              </button>
              <button type="button" className="edit" onClick={getInput}>
                <img src="./images/edit.svg" alt="" />
              </button>
            </div>
            <Modal
              isOpen={Boolean(itemId)}
              close={this.onClose}
              success={this.onOk}
              text={`Do you really want to ${itemState} ${idTitle}?`}
            />
          </>
        )
    );
  }
}
const mapState = state => ({
  user: state.user
});

export default connect(mapState)(ButtonsActions);
