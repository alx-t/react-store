import * as types from '~/src/constants/actionTypes/products';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case types.FETCH_PRODUCTS_REQUEST:
      return Object.assign({}, initialState, { isFetching: true });
    case types.FETCH_PRODUCTS_SUCCESS:
      return Object.assign({}, initialState, { entries: action.response });
    case types.FETCH_PRODUCTS_FAILURE:
      return Object.assign({}, initialState, { error: true });
    default:
      return state;
  }
}
