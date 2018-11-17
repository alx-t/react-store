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

  handleDrop(e, cart, addToCart) {
    const { id, title, price } = JSON.parse(e.dataTransfer.getData('item'));
    addToCart(id, title, 1, price);
  }

  render() {
    return (
      <cartContext.Consumer>
        {
          ({ cart, addToCart }) => (
            <div
                onDragOver={this.handleDragOver}
                onDrop={(e) => this.handleDrop(e, cart, addToCart)}>
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
