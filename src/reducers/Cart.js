import * as types from '~/src/constants/actionTypes/cart';
import { loadCart, clearCart } from '~/src/helpers/persistenceHelper';

class LineItem {
  constructor(id, title, quantity, price) {
    this._id = id;
    this._title = title;
    this._quantity = quantity;
    this._price = price;
    this._total = this._price * this._quantity;
  }

  get total() { return this._total; }
  get id() { return this._id; }
  get title() { return this._title; }
  get quantity() { return this._quantity; }
  get price() { return this._price; }
}

const initialState = {
  entries: loadCart(),
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
    default:
      return state;
  }
}
