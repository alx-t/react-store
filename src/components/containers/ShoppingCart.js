import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cartContext from '~/src/cartContext';

import LineItem from './LineItem';
import CatalogPage from '../CatalogPage';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      total: 0
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(id, title, quantity, price) {
    const li = new LineItem(id, title, quantity, price);
    const newItems = this.state.items;
    newItems.push(li);
    this.setState((prevState) => ({ items: newItems, total: prevState.total + li.total }));
  }

  render() {
    const catalogPage = this.props.children;
    return (
      <cartContext.Provider value={{ cart: this.state, addToCart: this.addToCart }}>
        <CatalogPage />
      </cartContext.Provider>
    );
  }
}

ShoppingCart.propTypes = {
  children: PropTypes.instanceOf(CatalogPage)
};

export default ShoppingCart;
