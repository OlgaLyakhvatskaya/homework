import { SET_LIST_PRODUCTS, SET_PRODUCT, CLEAN_LIST_PRODUCTS, CLEAN_PRODUCT } from './actions';
import {
  products as initialProducts,
  product as initialProduct
} from '../initialState';

export const products = (state = initialProducts, action) => {
  switch (action.type) {
    case SET_LIST_PRODUCTS: {
      return action.data;
    }
    case CLEAN_LIST_PRODUCTS: {
      return initialProducts;
    }
  }
  return state;
};

export const product = (state = initialProduct, action) => {
  switch (action.type) {
    case SET_PRODUCT: {
      return action.data;
    }
    case CLEAN_PRODUCT: {
      return initialProduct;
    }
  }
  return state;
};
