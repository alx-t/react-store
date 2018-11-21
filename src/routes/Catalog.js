import React from 'react';

import CatalogPage from '~/src/components/views/CatalogPage';
import { catalogPath } from '~/src/helpers/routes';

export default {
  path: catalogPath(),
  component: CatalogPage,
  exact: true
};
