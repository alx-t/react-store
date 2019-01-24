import { connect } from 'react-redux';

import { addItem } from 'actions/Cart';
import Cart from './Cart';

const actionsToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
});

const stateToProps = (state) => ({
  items: state.cart.entries
})

export default connect(stateToProps, actionsToProps)(Cart);
