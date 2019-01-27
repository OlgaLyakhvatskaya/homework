import { all } from 'redux-saga/effects';

import { watchUser } from './user';
import { watchInfo } from './categories';

export function* rootSaga() {
  yield all([
    watchUser(),
    watchInfo()
  ]);
}