import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux'

import Helmet from 'react-helmet';

import ProductDetail from './ProductDetail';

class ProductPage extends Component {
  render() {
    const product = (this.props.item) ? <ProductDetail {...this.props.item} />  : '';
    return (
      <div>
        <Helmet>
          <title>{this.props.item && this.props.item.title}</title>
        </Helmet>
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
