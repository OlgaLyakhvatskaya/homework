import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import FormInput from '../../components/formInput';
import { getProduct, addProduct } from '../../store/products';

import './product.scss';

class Product extends Component {
  state = {
    data: {}
  }

  componentDidMount() {
    const { match } = this.props;
    if (match.params.id !== 'new') {
      this.props.dispatch(getProduct(match.params.id));
    }
  }

  onChange = (value, key) => {
    const { data } = this.state;
    this.setState({ data: { ...data, [key]: value } });
  }

  saveNewProd = () => {
    event.preventDefault();
    const { data } = this.state;
    const { history } = this.props;
    this.props.dispatch(addProduct(data));
    history.push('/successnewprod');
  }


  render() {
    const { product } = this.props;
    return (
      <div className="single-product">
        {
          product
            ? (
              <>
                <img src={product.image ? product.image : '/images/no-photo.jpg'} alt="" />
                <h4 className="title">Title <FormInput item={product.title} /></h4>
                <p className="price">$ <FormInput item={product.price} /></p>
                <p className="description"><FormInput rows item={product.description} /></p>
              </>
            )
            : (
              <form className="newProd" onSubmit={this.saveNewProd}>
                <h4 className="title">Title <FormInput addOnBlure={value => this.onChange(value, 'title')} /></h4>
                <p className="price">$ <FormInput addOnBlure={value => this.onChange(value, 'price')} /></p>
                <p className="description"><FormInput rows addOnBlure={value => this.onChange(value, 'description')} /></p>
                <input
                  type="submit"
                  value="Add new"
                />
              </form>
            )
        }
      </div>
    );
  }
}

const mapState = state => ({ product: state.product });

export default withRouter(connect(mapState)(Product));
