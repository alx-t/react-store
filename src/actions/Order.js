import * as types from '../constants/actionTypes/order';
import { API_CALL } from 'middleware/API';

export function sendOrder(order) {
  return {
    [API_CALL]: {
      endpoint: '/orders',
      method: 'POST',
      query: { order },
      types: [
        types.ORDER_SEND_REQUEST,
        types.ORDER_SEND_SUCCESS,
        types.ORDER_SEND_FAILURE
      ]
    }
  };
}
