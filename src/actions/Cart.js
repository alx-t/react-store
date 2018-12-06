import * as types from '../constants/actionTypes/cart';

export function addItem(item) {
  return ({
    type: types.ADD_PRODUCT,
    item
  })
}

export function viewCart() {
  return ({
    type: types.VIEW_CART,
    items
  })
}
