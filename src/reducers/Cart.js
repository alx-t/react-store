import * as types from '~/src/constants/actionTypes/cart';

import LineItem from './LineItem';

function loadCart(entries) {
  return entries.map((i) => new LineItem(i._id, i._title, i._quantity, i._price));
}

const initialState = {
  entries: [],
  total: 0
};

export default function(state = initialState, action) {
  switch(action.type) {
    case types.CART_ADD_PRODUCT:
      const { id, title, quantity, price } = action.item
      const li = new LineItem(id, title, quantity, price);
      return Object.assign({}, initialState, { entries: state.entries.concat(li), total: state.total + li.total });
    case types.CART_CLEAR:
      return Object.assign({}, initialState);
    case types.CART_RESTORE:
      return Object.assign({}, initialState, { entries: loadCart(action.cart.entries), total: action.cart.total });
    default:
      return state;
  }
}
