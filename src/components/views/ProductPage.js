import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux'
import { fetchProduct } from '~/src/actions/Product';

import ProductDetail from './ProductDetail';

class ProductPage extends Component {
  componentDidMount() {
    const { fetchProduct } = this.props;
    fetchProduct(this.props.id);
  }

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

const actionsToProps = (dispatch) => ({
  fetchProduct: (id) => dispatch(fetchProduct(id))
});

const stateToProps = (state) => ({
  item: state.product.entry,
  isFetching: state.product.isFetching,
  error: state.product.error
});

export default connect(stateToProps, actionsToProps)(ProductPage);
