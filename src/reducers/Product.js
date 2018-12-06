import * as types from '~/src/constants/actionTypes/product';

const initialState = {
  isFetching: false,
  error: false,
  entry: null
};

export default function(state = initialState, action) {
  switch(action.type) {
    case types.FETCH_PRODUCT_REQUEST:
      return Object.assign({}, initialState, { isFetching: true });
    case types.FETCH_PRODUCT_SUCCESS:
      return Object.assign({}, initialState, { entry: action.response });
    case types.FETCH_PRODUCT_FAILURE:
      return Object.assign({}, initialState, { error: true });
    default:
      return state;
  }
}
