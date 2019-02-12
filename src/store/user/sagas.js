import { takeEvery, put, all } from 'redux-saga/effects';
import { CHECK_USER, setUser, LOGIN_USER, LOGOUT_USER, ADD_USER, UPDATE_USER } from './actions';
import { checkUser, login, logout, addUser, updateUser } from '../../services';
import { setError } from '../status';

function* checkSaga() {
  let user;
  try {
    user = yield checkUser();
    yield put(setUser(user));
  } catch(err){}
}

function* loginSaga(action) {
  try {
    const user = yield login(action.data);
    yield put(setUser(user));
  } catch(err){} 
}

function* logoutSaga() {
  try {
    yield logout();
    yield put(setUser(null));
  } catch(err){} 
}

function* addUserSaga(action) {
  try {
    yield addUser(action.data);
  } catch(err) {
    yield setError(err)
  } 
}

function* updateUserSaga(action) {
  try {
    const user = yield updateUser(action.data);
    yield put(setUser(user));
  } catch (err) {}
}

export function* watchUser() {
  yield all([
    takeEvery(CHECK_USER, checkSaga),
    takeEvery(LOGIN_USER, loginSaga),
    takeEvery(LOGOUT_USER, logoutSaga),
    takeEvery(ADD_USER, addUserSaga),
    takeEvery(UPDATE_USER, updateUserSaga),
  ]);
}
