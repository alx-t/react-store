import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import { catalogPath } from '~/src/helpers/routes';

import cartContext from '~/src/cartContext';

class CartPage extends Component {
  renderItems(items) {
    return (
      <ul>
        {items.map((item, key) => (
          <li key={key}>{item.title} >>> {item.quantity} * {item.price} >>> {item.total}</li>)
        )}
      </ul>
    );
  }

  renderCart(cart) {
    let result;
    if (cart.items.length > 0) {
      result = (
        <div>
          <h3>Cart Page</h3>
          {this.renderItems(cart.items)}
          <h4>Total: {cart.total}</h4>
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
      <cartContext.Consumer>
        {
          ({ cart }) => (
            this.renderCart(cart)
          )
        }
      </cartContext.Consumer>
    );
  }
}

export default CartPage;
