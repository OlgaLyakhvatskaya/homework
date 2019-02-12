import { connect } from 'react-redux';
import FormInput from '../formInput';
import ButtonsActions from '../buttonsActions';

import './controlItems.scss';

class ControlItems extends Component {
  state = {
    originListCat: [],
    listCat: [],
    buttonClick: false
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.rightItems !== prevState.originListCat) {
      return {
        originListCat: nextProps.rightItems,
        listCat: nextProps.rightItems
      };
    }
    return null;
  }

  onChangeInput = (event) => {
    const { originListCat } = this.state;
    this.setState({
      listCat: originListCat.filter((el) => {
        if (event.target.value.length > 1) {
          return el.title.toLowerCase().includes(event.target.value.toLowerCase());
        }
        return { listCat: originListCat };
      })
    });
  }

  addItem = (itemId) => {
    this.setState(itemId);
  }

  showInput = () => {
    this.setState(prev => ({ buttonClick: !prev.buttonClick }));
  }

  render() {
    const { listCat, buttonClick } = this.state;
    const {
      leftItems,
      onChangeLeftItem,
      user,
      removeItem,
      addItem
    } = this.props;

    return (
      <div className="control-items">
        <div className="cat">
          <p>Published</p>
          <ul className="published">
            {
              leftItems.map(({ title, id }) => {
                return (
                  <li key={id}>
                    <FormInput
                      item={title}
                      onOut={title => onChangeLeftItem(title, id)}
                      buttonClick={buttonClick}
                    />{
                    user
                      && (
                        <ButtonsActions
                          idItem={id}
                          idTitle={title}
                          itemState="unpublish"
                          removeItem={removeItem}
                          getInput={this.showInput}
                        />
                      )
                    }
                  </li>
                );
              })
            }
          </ul>
        </div>
        {
          user
            && (
              <div className="cat">
                <p>Not published</p>
                <ul className="unpublished">
                  <input type="search" onChange={this.onChangeInput} />
                  {
                    listCat.map(({ title, id }) => {
                      return <li key={id} onDoubleClick={() => addItem(id)}>{title}</li>;
                    })
                  }
                </ul>
              </div>
            )
        }
      </div>
    );
  }
}

const mapState = state => ({
  user: state.user
});

export default connect(mapState)(ControlItems);
