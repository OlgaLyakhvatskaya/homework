import { SET_INFO, CLEAN_INFO } from './actions';
import { info as infoInitial } from '../initialState';

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
