import FormInput from '../formInput';

const Product = () => (
  <form action="#" className="single-product">
    <h3 className="title">Title <FormInput /></h3>
    <p className="price">$ <FormInput /></p>
    <p className="description"><FormInput rows /></p>
    <input type="submit" value="Submit" />
  </form>
);


export default Product;
