import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux'

import ProductDetail from './ProductDetail';

class ProductPage extends Component {
  render() {
    const product = (this.props.item) ? <ProductDetail {...this.props.item} />  : '';
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

const stateToProps = (state) => ({
  item: state.product.entry,
  isFetching: state.product.isFetching,
  error: state.product.error
});

export default connect(stateToProps)(ProductPage);
