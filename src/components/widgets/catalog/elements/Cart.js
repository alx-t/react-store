import React, { Component } from 'react';

import cartContext from '~/src/cartContext';

import styles from './Cart.css';
import cart_icon from '~/src/images/cart.png';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.handleDragOver = this.handleDragOver.bind(this);
  }

  handleDragOver(e) {
    e.preventDefault();
  }

  handleDrop(e, cart, event) {
    const id = e.dataTransfer.getData('id');
    const title = e.dataTransfer.getData('title');
    const price = e.dataTransfer.getData('price');
    event(cart, { id: id, title: title, quantity: 1, price: price });
  }

  render() {
    return (
      <cartContext.Consumer>
        {
          ({ cart, event }) => (
            <div
                onDragOver={this.handleDragOver}
                onDrop={(e) => this.handleDrop(e, cart, event)}>
              <button className='btn'>
                <img height="40" width="40" src={cart_icon}/>{cart.items.length}
              </button>
            </div>
          )
        }
      </cartContext.Consumer>
    );
  }
}

export default Cart;
