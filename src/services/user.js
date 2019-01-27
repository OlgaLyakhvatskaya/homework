import { rest } from './rest';

const login = data => rest.post('public/login', data);

const checkUser = () => rest.get('public/checkUser');

const logout = () => rest.get('logout');

const addUser = data => rest.post('public/user', data);

const updateUser = data => rest.put('user', data);

export { login, checkUser, logout, addUser, updateUser };
