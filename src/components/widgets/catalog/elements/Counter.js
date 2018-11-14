import React from 'react';

import cartContext from '~/src/cartContext';

import styles from './Counter.css';
import cart_icon from '~/src/images/cart.png';

const Counter = () => (
  <cartContext.Consumer>
    {
      ({ cart, event }) => (
        <button className='btn'>
          <img height="40" width="40" src={cart_icon}/>{cart.items.length}
        </button>
      )
    }
  </cartContext.Consumer>
);

export default Counter;
