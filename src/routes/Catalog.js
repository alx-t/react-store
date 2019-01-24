import React from 'react';

import CatalogPage from 'components/views/CatalogPage';
import { catalogPath } from 'helpers/routes';

import { fetchProducts } from 'actions/Products';

export default {
  path: catalogPath(),
  component: CatalogPage,
  prepareData: (store, query, params) => {
    return store.dispatch(fetchProducts());
  },
  exact: true
};
