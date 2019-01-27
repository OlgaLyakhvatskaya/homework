import { rest } from './rest';

const getProduct = id => rest.get(`public//products/${id}`);

const getListProd = () => rest.get('public/products');

const getInfo = () => rest.get('shop_info');

export { getProduct, getListProd, getInfo };
