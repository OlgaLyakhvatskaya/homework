import {
  SET_INFO,
  CLEAN_INFO,
  SET_CATEGORIES,
  CLEAN_CATEGORIES,
  SET_CATEGORY,
  CLEAN_CATEGORY
} from './actions';
import { 
  info as infoInitial,
  categories as initialCategories,
  category as initialCategory
} from '../initialState';

export const info = (state = infoInitial, action) => {
  switch (action.type) {
    case SET_INFO: {
      return action.data;
    }
    case CLEAN_INFO: {
      return infoInitial;
    }
  }
  return state;
};

export const categories = (state = initialCategories, action) => {
  switch (action.type) {
    case SET_CATEGORIES: {
      return action.data;
    }
    case CLEAN_CATEGORIES: {
      return initialCategories;
    }
  }
  return state;
};

export const category = (state = initialCategory, action) => {
  switch (action.type) {
    case SET_CATEGORY: {
      return action.data;
    }
    case CLEAN_CATEGORY: {
      return initialCategory;
    }
  }
  return state;
};
