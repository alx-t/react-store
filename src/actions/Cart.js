import * as types from '../constants/actionTypes/cart';

export function addItem(item) {
  return ({
    type: types.ADD_PRODUCT,
    item
  })
}
