import React, { Component } from 'react';

import cartContext from '~/src/cartContext';

import { PRODUCTS } from '~/src/constants/Products';
import Catalog from '~src/components/widgets/catalog/Catalog';
import ShoppingCart from './ShoppingCart';

export default class CatalogPage extends Component {
  constructor(props) {
    super(props);
    this.state = { cart: new ShoppingCart() };
    this.addItemClick = this.addItemClick.bind(this);
  }

  addItemClick(cart, { id, title, quantity, price }) {
    this.setState((prevState) => ({ cart: prevState.cart.add(id, title, quantity, price) }));
  }

  render() {
    return (
      <cartContext.Provider value={{ cart: this.state.cart, event: this.addItemClick }}>
        <Catalog products={PRODUCTS} />
      </cartContext.Provider>
    );
  }
}
