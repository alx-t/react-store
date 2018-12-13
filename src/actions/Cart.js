import * as types from '../constants/actionTypes/cart';

export function addItem(item) {
  return ({
    type: types.CART_ADD_PRODUCT,
    item
  })
}

export function clearCart() {
  return ({
    type: types.CART_CLEAR
  })
}

export function restoreCart() {
  return ({
    type: types.CART_RESTORE,
  })
}
