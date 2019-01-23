import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux'

import Helmet from 'react-helmet';

import ProductDetail from './ProductDetail';

class ProductPage extends Component {
  render() {
    console.log('==== prod page');
    console.log(this.props);
    const product = (this.props.item) ? <ProductDetail {...this.props.item} />  : '';
    // console.log(product);
    return (
      <div>
        <Helmet>
          <title>{this.props.item && this.props.item.title}</title>
          <meta name="description" content="Thinknetica React Stor" />
          <meta name="keywords" content="Thinknetica React Stor" />
        </Helmet>
        {product}
      </div>
    )
  }
}

ProductPage.propTypes = {
  id: PropTypes.string.isRequired
};

const stateToProps = (state) => {
  console.log('----- st2pr');
  console.log(state);
  return ({
  item: state.product.entry,
  isFetching: state.product.isFetching,
  error: state.product.error
});}

export default connect(stateToProps)(ProductPage);
