import { takeEvery, put, all } from 'redux-saga/effects';
import {
  GET_INFO,
  setInfo,
  GET_CATEGORIES,
  setCategories,
  UPDATE_CATEGORY
} from './actions';
import { getInfo, getCategories, updateCategory } from '../../services';

function* getInfoSaga() {
  const info = yield getInfo();
  yield put(setInfo(info));
}

function* getCategoriesSaga() {
  const categories = yield getCategories();
  yield put(setCategories(categories));
}

function* updateCategorySaga(action) {
  yield updateCategory(action.data);
  yield getCategoriesSaga();
}

export function* watchCategories() {
  yield all([
    takeEvery(GET_INFO, getInfoSaga),
    takeEvery(GET_CATEGORIES, getCategoriesSaga),
    takeEvery(UPDATE_CATEGORY, updateCategorySaga),
  ]);
}
