import { IRequestProductsAction, IReceiveProductsAction } from 'src/state/reducers/productsReducer';

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

export const requestProducts = (filters: IFilters): IRequestProductsAction => ({
  type: REQUEST_PRODUCTS,
  payload: filters,
});

export const receiveProducts = (products: IProduct[]): IReceiveProductsAction => ({
  type: RECEIVE_PRODUCTS,
  payload: products,
});
