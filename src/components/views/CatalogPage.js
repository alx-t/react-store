import React, { Component } from 'react';

import { connect } from 'react-redux'
import { fetchProducts } from '~/src/actions/Products';

import Catalog from '~/src/components/widgets/catalog/Catalog';

class CatalogPage extends Component {
  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  render() {
    return (
      <Catalog products={this.props.items} />
    );
  }
}

const actionsToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts())
});

const stateToProps = (state) => ({
  items: state.products.entries,
  isFetching: state.products.isFetching,
  error: state.products.error
})

export default connect(stateToProps, actionsToProps)(CatalogPage);
