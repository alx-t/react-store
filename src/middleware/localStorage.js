import * as types from '~/src/constants/actionTypes/cart';
import { addItemToCart, clearCart } from '~/src/helpers/persistenceHelper';

export default (store) => (next) => (action) => {
  switch(action.type) {
    case types.CART_ADD_PRODUCT:
      addItemToCart(action.item);
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
