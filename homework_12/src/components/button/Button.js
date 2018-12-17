import './button.scss';

class Button extends Component {
  state = { hasClass: false }

  onClickHandle = () => {
    this.setState(prev => ({ hasClass: !prev.hasClass }));
  }

  render() {
    const { hasClass } = this.state;

    return (
      <button type="button" onClick={this.onClickHandle} className={hasClass ? 'active' : ''}>Click me!</button>
    );
  }
}

export default Button;
