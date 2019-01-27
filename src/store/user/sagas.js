import { takeEvery, put, all } from 'redux-saga/effects';
import { CHECK_USER, setUser, LOGIN_USER, LOGOUT_USER } from './actions';
import { checkUser, login, logout } from '../../services';

function* checkSaga() {
  let user;
  try {
    user = yield checkUser();
  } catch (error) {
      yield put(setUser(user));
  }
}

function* loginSaga(action) {
  const user = yield login(action.data);
  yield put(setUser(user));
}

function* logoutSaga() {
  yield logout();
  yield put(setUser(null));
}

export function* watchUser() {
  yield all([
    takeEvery(CHECK_USER, checkSaga),
    takeEvery(LOGIN_USER, loginSaga),
    takeEvery(LOGOUT_USER, logoutSaga),
  ]);
}
