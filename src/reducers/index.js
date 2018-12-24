import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import products from './Products';
import product from './Product';
import cart from './Cart';
import order from './Order';

export default combineReducers({
  products,
  product,
  cart,
  order,
  form: formReducer
});
