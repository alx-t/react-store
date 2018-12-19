import * as types from '~/src/constants/actionTypes/order';

import LineItem from './LineItem';

const initialState = {
  entries: [],
  total: 0,
  customer: {
    fullName: '',
    phone: '',
    email: '',
    address: ''
  },
  isFetching: false,
  isError: false,
  isSuccess: false,
};

export default function(state = initialState, action) {
  switch(action.type) {
    case types.ORDER_SEND_REQUEST:
      return Object.assign({}, initialState, { isFetching: true });
    case types.ORDER_SEND_SUCCESS:
      return Object.assign({}, initialState, { isError: false, isSuccess: true });
    case types.ORDER_SEND_FAILURE:
      return Object.assign({}, initialState, { isError: true, isSuccess: false });
    default:
      return state;
  }
}
