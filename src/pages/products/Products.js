import FormInput from '../../components/formInput';
import ButtonsActions from '../../components/buttonsActions';

import './products.scss';

class Products extends Component {
  state = {
    originListProd: [],
    listProd: []
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.listProd !== prevState.originListProd) {
      return {
        originListProd: nextProps.listProd,
        listProd: nextProps.listProd
      };
    }
    return null;
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

  render() {
    const { listProd } = this.state;

    return (
      <div className="prod-cont">
        <h3>Products</h3>
        <div className="prod_item">
          <input type="search" onChange={this.onChangeInput} />
          <button type="button">Add new</button>
        </div>
        <div className="product-list">
          {
            listProd.map(elem => (
              <div className="product" key={elem.id}>
                <a href={`products/${elem.id}`} className="head-prod">
                  <img src={elem.image ? elem.image : './images/no-photo.jpg'} alt={elem.title} />
                  <ButtonsActions />
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

export default Products;
