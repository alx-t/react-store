import * as types from 'constants/actionTypes/product';

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
      console.log('==== red succ');
      console.log(action.response.product);
      console.log(Object.assign({}, initialState, { entry: action.response.product }));
      return Object.assign({}, initialState, { entry: action.response.product });
    case types.FETCH_PRODUCT_FAILURE:
      return Object.assign({}, initialState, { error: true });
    default:
      return state;
  }
}
