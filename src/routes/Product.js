import React from 'react';

import ProductPage from '~/src/components/views/ProductPage';
import { productPath } from '~/src/helpers/routes';

import { fetchProduct } from '~/src/actions/Product';

export default {
  path: productPath(),
  prepareData: (store, query, params) => {
    store.dispatch(fetchProduct(params.id));
  },
  render: ({ match }) => (
    <ProductPage id={match.params.id} />
  )
};
