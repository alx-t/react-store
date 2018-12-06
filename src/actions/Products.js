import request from 'superagent';
import { camelizeKeys } from 'humps';

import { host } from '~/src/constants/host';
import * as types from '../constants/actionTypes/products';

const requestProducts = () => ({
  type: types.FETCH_PRODUCTS_REQUEST
});

const receiveProducts = (response) => ({
  type: types.FETCH_PRODUCTS_SUCCESS,
  response
});

const errorProducts = () => ({
  type: types.FETCH_PRODUCTS_FAILURE
});

export function fetchProducts() {
  return(dispatch) => {
    dispatch(requestProducts());

    return request
      .get(host)
      .end((err, res) => (
          err ? dispatch(errorProducts()) : dispatch(receiveProducts(camelizeKeys((res || {}).body.products)))
    ));
  };
}
