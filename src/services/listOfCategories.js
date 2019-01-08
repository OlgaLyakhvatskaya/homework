import { rest } from './rest';

const getListCat = () => rest.get('public/products');

export { getListCat };
