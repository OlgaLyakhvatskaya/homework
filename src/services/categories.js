import { rest } from './rest';

const getCategories = () => rest.get('public/categories');

const getCategory = data => rest.get(`public/categories/${data.id}`);

const updateCategory = data => rest.put(`categories/${data.id}`, data);

export { getCategories, getCategory, updateCategory };
