import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cartContext from '~/src/cartContext';

class LineItem {
  constructor(id, title, quantity, price) {
    this._id = id;
    this._title = title;
    this._quantity = quantity;
    this._price = price;
    this._total = this._price * this._quantity;
  }

  get total() { return this._total; }
  get id() { return this._id; }
  get title() { return this._title; }
  get quantity() { return this._quantity; }
  get price() { return this._price; }
}

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
    const newItems = this.state.items.concat(li);
    this.setState((prevState) => ({ items: newItems, total: prevState.total + li.total }));
  }

  render() {
    return (
      <cartContext.Provider value={{ cart: this.state, addToCart: this.addToCart }}>
        {this.props.children}
      </cartContext.Provider>
    );
  }
}

ShoppingCart.propTypes = {
  children: PropTypes.instanceOf(Component)
};

export default ShoppingCart;
