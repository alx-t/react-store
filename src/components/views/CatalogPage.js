import React, { Component } from 'react';

import { camelizeKeys } from 'humps';
import request from 'superagent';

import Catalog from '~src/components/widgets/catalog/Catalog';

export default class CatalogPage extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] }
  }

  fetchProducts() {
    const url = 'http://localhost:3000/products';
    request
      .get(url)
      .end((err, res) => (
          !err && this.setState({ products: camelizeKeys((res || {}).body.products) })
    ));
  }

  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    return (
      <Catalog products={this.state.products} />
    );
  }
}
