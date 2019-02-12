import { takeEvery, put, all } from 'redux-saga/effects';
import { GET_LIST_PRODUCTS, setListProd, GET_PRODUCT, setProduct, UPDATE_PRODUCT, ADD_PRODUCT, DELETE_PRODUCT } from './actions';
import { getListProd, getProduct, updateProduct, deleteProduct, addProduct } from '../../services';

function* getProductsListSaga() {
  const products = yield getListProd();
  yield put(setListProd(products));
}

function* getProductSaga(action) {
  const product = yield getProduct(action.data);
  yield put(setProduct(product));
}

function* updateProductSaga(action) {
  yield updateProduct(action.data);
  const product = yield getProduct(action.data.id);
  yield put(setProduct(product));
}

function* addProdSaga(action) {
  yield addProduct(action.data);
  yield getProductsListSaga();
}

function* deleteProdSaga(action) {
  yield deleteProduct(action.data);
  yield getProductsListSaga();
}

export function* watchProductsList() {
  yield all([
    takeEvery(GET_LIST_PRODUCTS, getProductsListSaga),
    takeEvery(GET_PRODUCT, getProductSaga),
    takeEvery(UPDATE_PRODUCT, updateProductSaga),
    takeEvery(ADD_PRODUCT, addProdSaga),
    takeEvery(DELETE_PRODUCT, deleteProdSaga),
  ]);
}
