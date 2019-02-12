import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getListProd, deleteProduct } from '../../store/products';

import FormInput from '../../components/formInput';
import ButtonsActions from '../../components/buttonsActions';

import './products.scss';

class Products extends Component {
  state = {
    originListProd: [],
    listProd: []
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.products !== prevState.originListProd) {
      return {
        originListProd: nextProps.products,
        listProd: nextProps.products
      };
    }
    return null;
  }

  componentDidMount() {
    this.props.dispatch(getListProd());
  }

  onChangeInput = (event) => {
    const { originListProd } = this.state;
    this.setState({
      listProd: originListProd.filter((el) => {
        if (event.target.value.length > 1) {
          return el.title.toLowerCase().includes(event.target.value.toLowerCase());
        }
        return { listProd: originListProd };
      })
    });
  }

  deleteProduct = (id) => {
    this.props.dispatch(deleteProduct(id));
  }

  onClickHand = () => {
    const { history } = this.props;

    event.preventDefault();
    history.push('products/new');
  }

  render() {
    const { listProd } = this.state;
    const { user } = this.props;

    return (
      <div className="prod-cont">
        <h3>Products</h3>
        <div className="prod_item">
          <input type="search" onChange={this.onChangeInput} />
          {
            user
              && (
                <button type="button" onClick={this.onClickHand}> Add new </button>
              )
          }
        </div>
        <div className="product-list">
          {
            listProd.map(elem => (
              <div className="product" key={elem.id}>
                <ButtonsActions
                  idItem={elem.id}
                  idTitle={elem.title}
                  itemState="delete"
                  removeItem={this.deleteProduct}
                />
                <a href={`products/${elem.id}`} className="head-prod">
                  <img src={elem.image ? elem.image : './images/no-photo.jpg'} alt={elem.title} />
                </a>
                <FormInput item={elem.title} />
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
const mapState = state => ({
  products: state.products,
  user: state.user
});

export default withRouter(connect(mapState)(Products));
