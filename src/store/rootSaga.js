import { all, put } from 'redux-saga/effects';

import { watchUser } from './user';
import { watchProductsList } from './products';
import { watchCategories } from './categories';
import { setError } from './status';

export function* rootSaga() {
  try {
    yield all([
      watchUser(),
      watchProductsList(),
      watchCategories(),

    ]);
  } catch (error) {
    yield put(setError(error));
  }
}
