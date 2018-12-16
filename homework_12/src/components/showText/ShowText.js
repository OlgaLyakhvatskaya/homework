import './showtext.scss';

class ShowText extends Component {
  state = {
    showBlock: false,
    displayImg: false,
  };

  showTextButton = () => {
    this.setState(
      prev => ({
        showBlock: !prev.showBlock,
        displayImg: !prev.displayImg
      })
    );
  };

  render() {
    const { showBlock, displayImg } = this.state;

    return (
      <>
        <button type="button" onClick={this.showTextButton}>{showBlock ? 'Hide' : 'Show'}</button>
        <img style={{ display: displayImg ? 'block' : 'none' }} src="https://s.tcdn.co/4a4/f28/4a4f2880-e005-3f8f-ab47-2bb189e7d263/9.png" alt="ГГГГ" />
      </>
    );
  }
}

export default ShowText;
