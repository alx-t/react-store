import request from 'superagent';
import { camelizeKeys } from 'humps';

import { host } from '~/src/constants/host';
import * as types from '../constants/actionTypes/product';

const requestProduct = (id) => ({
  type: types.FETCH_PRODUCT_REQUEST,
  id
});

const receiveProduct = (response) => ({
  type: types.FETCH_PRODUCT_SUCCESS,
  response
});

const errorProduct = () => ({
  type: types.FETCH_PRODUCT_FAILURE
});

export function fetchProduct(id) {
  return(dispatch) => {
    dispatch(requestProduct(id));

    return request
      .get(`${host}${id}`)
      .end((err, res) => (
          err ? dispatch(errorProduct()) : dispatch(receiveProduct(camelizeKeys((res || {}).body.product)))
    ));
  };
}
