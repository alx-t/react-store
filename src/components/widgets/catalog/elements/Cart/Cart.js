import React, { Component } from 'react';

import styles from './Cart.css';
import cartIcon from '~/src/images/cart.png';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.handleDragOver = this.handleDragOver.bind(this);
  }

  handleDragOver(e) {
    e.preventDefault();
  }

  handleDrop(e) {
    const { id, title, price } = JSON.parse(e.dataTransfer.getData('item'));
    this.props.addItem({ id, title, quantity: 1, price });
  }

  render() {
    return (
      <div
        onDragOver={this.handleDragOver}
        onDrop={(e) => this.handleDrop(e)}>
      <button className='btn'>
        <img height="40" width="40" src={cartIcon}/>{this.props.items.length}
      </button>
    </div>
    );
  }
}
