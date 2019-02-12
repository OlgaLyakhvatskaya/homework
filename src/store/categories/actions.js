export const GET_INFO = 'Get info';
export const SET_INFO = 'Set info';
export const CLEAN_INFO = 'Clean info';

export const getInfo = () => ({ type: GET_INFO });
export const setInfo = data => ({ type: SET_INFO, data });
export const cleanInfo = () => ({ type: CLEAN_INFO });

export const GET_CATEGORIES = 'Get categories';
export const SET_CATEGORIES = 'Set categories';
export const CLEAN_CATEGORIES = 'Clean categories';

export const getCategories = () => ({ type: GET_CATEGORIES });
export const setCategories = data => ({ type: SET_CATEGORIES, data });
export const cleanCategories = () => ({ type: CLEAN_CATEGORIES });

export const GET_CATEGORY = 'Get category';
export const SET_CATEGORY = 'Set category';
export const UPDATE_CATEGORY = 'Update category';
export const CLEAN_CATEGORY = 'Clean category';

export const getCategory = () => ({ type: GET_CATEGORY });
export const setCategory = data => ({ type: SET_CATEGORY, data });
export const updateCategory = data => ({ type: UPDATE_CATEGORY, data });
export const cleanCategory = () => ({ type: CLEAN_CATEGORY });
