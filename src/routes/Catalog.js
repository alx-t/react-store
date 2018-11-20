import React from 'react';

import CatalogPage from '~/src/components/CatalogPage';
import { catalogPath } from '~/src/helpers/routes';

export default {
  path: catalogPath(),
  component: CatalogPage,
  exact: true
};
