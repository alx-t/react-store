import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { camelizeKeys } from 'humps';
import request from 'superagent';

import { host } from '~/src/constants/host';

import ProductDetail from './ProductDetail';

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  fetchProducts() {
    const url = `${host}${this.props.id}`;
    request
      .get(url)
      .end((err, res) => (
          !err && this.setState((prevState) => ({
            product: camelizeKeys((res || {}).body.product)
          }))
        ));
  }

  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    const product = (this.state.product) ? <ProductDetail {...this.state.product} /> : '';
    return (
      <div>
        {product}
      </div>
    )
  }
}

ProductPage.propTypes = {
  id: PropTypes.string.isRequired
};

export default ProductPage;
