import { all, put } from 'redux-saga/effects';

import { watchUser } from './user';
import { watchInfo } from './categories';
import { setError } from './status';

export function* rootSaga() {
  try {
    yield all([
      watchUser(),
      watchInfo(),
    ]);
  } catch (error) {
    yield put(setError(error));
  }
}
