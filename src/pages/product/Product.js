import FormInput from '../../components/formInput';
import { getProduct } from '../../services';

const Product = ({ match }) => {
  return (
    <form action="#" className="single-product">
      {match.params.id}
      <h4 className="title">Title<FormInput /></h4>
      <p className="price">$ <FormInput /></p>
      <p className="description"><FormInput rows /></p>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Product;
