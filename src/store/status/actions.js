export const SET_ERROR = 'Set error';
export const CLEAN_ERROR = 'Clean error';

export const setError = data => ({ type: SET_ERROR, data });
export const cleanError = () => ({ type: CLEAN_ERROR });
