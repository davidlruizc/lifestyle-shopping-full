import { takeLatest, put, call } from 'redux-saga/effects';
import { receiveProducts, REQUEST_PRODUCTS } from 'src/actions/redux';
import { fetchProducts } from 'src/actions/apiCalls/fetchProducts';
import { IRequestProductsAction } from 'src/state/reducers/productsReducer';

function* getProducts(action: IRequestProductsAction) {
  try {
    const data = yield call(fetchProducts, action.payload);
    yield put(receiveProducts(data));
  } catch (e) {
    console.log(e);
  }
}

export function* searchProducts() {
  yield takeLatest(REQUEST_PRODUCTS, getProducts);
}
