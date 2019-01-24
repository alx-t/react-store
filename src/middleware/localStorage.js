import * as cartTypes from 'constants/actionTypes/cart';
import * as orderTypes from 'constants/actionTypes/order';

import { restoreCart as actionRestoreCart } from 'actions/Cart';

import { saveCart, restoreCart, clearCart } from 'helpers/persistenceHelper';

export default (store) => (next) => (action) => {
  switch(action.type) {
    case cartTypes.CART_ADD_PRODUCT:
      next(action);
      saveCart(store.getState().cart)
      break;
    case cartTypes.CART_RESTORE:
      const cart = restoreCart();
      action.cart = cart;
      next(action);
      break;
    case orderTypes.ORDER_SEND_SUCCESS || cartTypes.CART_CLEAR:
      clearCart();
      store.dispatch(actionRestoreCart());
      next(action);
      break;
    default:
      next(action);
  }
}
