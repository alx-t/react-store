import * as types from '../constants/actionTypes/product';

import { API_CALL } from 'middleware/API';

export function fetchProduct(id) {
  return {
    [API_CALL]: {
      endpoint: `/products/${id}`,
      method: 'GET',
      query: {},
      types: [
        types.FETCH_PRODUCT_REQUEST,
        types.FETCH_PRODUCT_SUCCESS,
        types.FETCH_PRODUCT_FAILURE
      ]
    }
  };
}
