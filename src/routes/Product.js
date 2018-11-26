import React from 'react';

import ProductPage from '~/src/components/views/ProductPage';
import { productPath } from '~/src/helpers/routes';

export default {
  path: productPath(),
  render: ({ match }) => (
    <ProductPage id={match.params.id} />
  )
};
