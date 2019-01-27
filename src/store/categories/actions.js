export const GET_INFO= 'Get info';
export const CLEAN_INFO = 'Clean category';
export const SET_INFO = 'Set category';

export const getInfo = () => ({ type: GET_INFO });
export const setInfo = data => ({ type: SET_INFO, data });
export const cleanInfo = () => ({ type: CLEAN_INFO });
