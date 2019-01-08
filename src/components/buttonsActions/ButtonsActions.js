import './buttonsActions.scss';

class ButtonsActions extends Component {
  render() {
    return (
      <div className="buttons">
        <a href="#" className="delete"><img src="./images/clear.svg"/></a>
        <a href="#" className="edit"><img src="./images/edit.svg"/></a>
      </div>
    );
  }
}
export default ButtonsActions;
