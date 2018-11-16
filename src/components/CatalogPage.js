import React, { Component } from 'react';

import { PRODUCTS } from '~/src/constants/Products';
import Catalog from '~src/components/widgets/catalog/Catalog';

export default class CatalogPage extends Component {
  render() {
    return (
      <Catalog products={PRODUCTS} />
    );
  }
}
