import { all, fork } from 'redux-saga/effects';
import * as searchCarProducts from 'src/sagas/searchProducts';

export default function* rootSaga() {
  yield all([...Object.values(searchCarProducts)].map(fork));
}
