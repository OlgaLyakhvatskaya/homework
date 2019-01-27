export const LOGIN_USER = 'Login';
export const CHECK_USER = 'Check user';
export const SET_USER = 'Set user';
export const LOGOUT_USER = 'logout user';

export const login = data => ({ type: LOGIN_USER, data });
export const checkUser = () => ({ type: CHECK_USER });
export const setUser = data => ({ type: SET_USER, data });
export const logout = () => ({ type: LOGOUT_USER });
