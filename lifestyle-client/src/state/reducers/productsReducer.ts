import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS } from 'src/actions/redux';

export interface IRequestProductsAction {
  type: typeof REQUEST_PRODUCTS;
  payload: IFilters;
}

export interface IReceiveProductsAction {
  type: typeof RECEIVE_PRODUCTS;
  payload: IProduct[];
}

export type IReceiveProductsActionType = IReceiveProductsAction;

const initialState: IProduct[] = [];

const productsReducer = (
  state: IProduct[] = initialState,
  action: IReceiveProductsActionType
): IProduct[] => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};

export default productsReducer;
