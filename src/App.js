import React, { Component } from 'react';

import ShoppingCart from '~/src/components/containers/ShoppingCart';
import CatalogPage from '~/src/components/CatalogPage';

export default class App extends Component {
  render() {
    return (
      <ShoppingCart>
        <CatalogPage />
      </ShoppingCart>
    );
  }
}
