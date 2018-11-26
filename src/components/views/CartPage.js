import React, { Component } from 'react';

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
    return (
      <div>
        {this.renderItems(cart.items)}
        <h4>Total: {cart.total}</h4>
      </div>
    );
  }

  render() {
    return (
      <cartContext.Consumer>
        {
          ({ cart }) => (
            <div>
              <h3>Cart Page</h3>
              {this.renderCart(cart)}
            </div>
          )
        }
      </cartContext.Consumer>
    );
  }
}

export default CartPage;
