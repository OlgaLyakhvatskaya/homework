export const GET_LIST_PRODUCTS = 'Get list of products';
export const SET_LIST_PRODUCTS = 'Set list of products';
export const CLEAN_LIST_PRODUCTS = 'Clean list products';

export const getListProd = () => ({ type: GET_LIST_PRODUCTS });
export const setListProd = data => ({ type: SET_LIST_PRODUCTS, data });
export const cleanListProd = () => ({ type: CLEAN_LIST_PRODUCTS });

export const GET_PRODUCT = 'Get product';
export const SET_PRODUCT = 'Set product';
export const UPDATE_PRODUCT = 'Update product';
export const CLEAN_PRODUCT = 'Clean product';
export const DELETE_PRODUCT = 'Delete product';
export const ADD_PRODUCT = 'Add product';

export const getProduct = data => ({ type: GET_PRODUCT, data });
export const setProduct = data => ({ type: SET_PRODUCT, data });
export const updateProduct = data => ({ type: UPDATE_PRODUCT, data });
export const addProduct = data => ({ type: ADD_PRODUCT, data });
export const cleanProduct = () => ({ type: CLEAN_PRODUCT });
export const deleteProduct = data => ({ type: DELETE_PRODUCT, data });
