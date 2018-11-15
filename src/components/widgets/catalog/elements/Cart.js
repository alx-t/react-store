import React, { Component } from 'react';

import cartContext from '~/src/cartContext';

import styles from './Cart.css';
import cartIcon from '~/src/images/cart.png';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.handleDragOver = this.handleDragOver.bind(this);
  }

  handleDragOver(e) {
    e.preventDefault();
  }

  handleDrop(e, cart, eventAddToCart) {
    const { id, title, price } = JSON.parse(e.dataTransfer.getData('item'));
    eventAddToCart(cart, { id: id, title: title, quantity: 1, price: price });
  }

  render() {
    return (
      <cartContext.Consumer>
        {
          ({ cart, eventAddToCart }) => (
            <div
                onDragOver={this.handleDragOver}
                onDrop={(e) => this.handleDrop(e, cart, eventAddToCart)}>
              <button className='btn'>
                <img height="40" width="40" src={cartIcon}/>{cart.items.length}
              </button>
            </div>
          )
        }
      </cartContext.Consumer>
    );
  }
}

export default Cart;
