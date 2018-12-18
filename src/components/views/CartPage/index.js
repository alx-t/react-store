import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import { catalogPath } from '~/src/helpers/routes';
import { clearCart } from '~/src/actions/Cart';

class CartPage extends Component {
  renderItems(items) {
    return (
      <ul>
        {items.map((item, key) => (
          <li key={key}>{item.title} >>> {item.quantity} * {item.price} >>> {item.total} </li>)
        )}
      </ul>
    );
  }

  renderCart() {
    const { items, total } = this.props;
    let result;
    if (items.length > 0) {
      result = (
        <div>
          <h3>Cart Page</h3>
          {this.renderItems(items)}
          <h4>Total: {total}</h4>
          <button onClick={() => this.props.clearCart()}>Clear</button>
        </div>
      );
    } else {
      result = (<Redirect to={{
        pathname: catalogPath(),
        state: { message: 'Cart is empty' }
      }} />);
    }
    return result;
  }

  render() {
    return (
      this.renderCart()
    );
  }
}

const actionsToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart())
});

const stateToProps = (state) => ({
  items: state.cart.entries,
  total: state.cart.total
});

export default connect(stateToProps, actionsToProps)(CartPage);
