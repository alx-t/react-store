import * as types from '~/src/constants/actionTypes/cart';
import { saveCart, restoreCart, clearCart } from '~/src/helpers/persistenceHelper';

export default (store) => (next) => (action) => {
  switch(action.type) {
    case types.CART_ADD_PRODUCT:
      next(action);
      saveCart(store.getState().cart)
      break;
    case types.CART_RESTORE:
      const cart = restoreCart();
      action.cart = cart;
      next(action);
      break;
    case types.CART_CLEAR:
      clearCart();
      next(action);
      break;
    default:
      next(action);
  }
}
