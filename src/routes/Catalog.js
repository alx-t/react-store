import React from 'react';

import CatalogPage from '~/src/components/views/CatalogPage';
import { catalogPath } from '~/src/helpers/routes';

import { fetchProducts } from '~/src/actions/Products';

export default {
  path: catalogPath(),
  component: CatalogPage,
  prepareData: (store) => {
    store.dispatch(fetchProducts());
  },
  exact: true
};
