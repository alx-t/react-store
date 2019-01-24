import React from 'react';

import ProductPage from 'components/views/ProductPage';
import { productPath } from 'helpers/routes';

import { fetchProduct } from 'actions/Product';

export default {
  path: productPath(),
  prepareData: (store, query, params) => {
    return store.dispatch(fetchProduct(params.id));
  },
  render: ({ match }) => (
    <ProductPage id={match.params.id} />
  )
};
