// Async
// 1. get user
// 2. create user
// 3. update user
export const LOGIN_USER = 'Login';
export const LOGOUT_USER = 'logout user';
export const CHECK_USER = 'Check user';
export const SET_USER = 'Set user';

export const login = data => ({ type: LOGIN_USER, data });
export const logout = () => ({ type: LOGOUT_USER });
export const checkUser = () => ({ type: CHECK_USER });
export const setUser = data => ({ type: SET_USER, data });
