import React, { Component } from 'react';

import { connect } from 'react-redux'

import Catalog from './Catalog';

class CatalogPage extends Component {
  render() {
    return (
      <Catalog products={this.props.items} />
    );
  }
}

const stateToProps = (state) => ({
  items: state.products.entries,
  isFetching: state.products.isFetching,
  error: state.products.error
})

export default connect(stateToProps)(CatalogPage);
