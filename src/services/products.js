import { rest } from './rest';

const getProduct = id => rest.get(`public/products/${id}`);

const getListProd = () => rest.get('public/products');

const getInfo = () => rest.get('shop_info');

const updateProduct = data => rest.put(`products/${data.id}`, data);

const deleteProduct = id => rest.delete(`products/${id}`);

const addProduct = data => rest.post('products', data);

export { getProduct, getListProd, getInfo, updateProduct, deleteProduct, addProduct };
