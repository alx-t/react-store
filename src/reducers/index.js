import { combineReducers } from 'redux';

import products from './Products';
import product from './Product';
import cart from './Cart';

export default combineReducers({
  products,
  product,
  cart
});
