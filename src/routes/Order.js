import React from 'react';

import OrderPage from '~/src/components/views/OrderPage';
import { orderPath } from '~/src/helpers/routes';

export default {
  path: orderPath(),
  component: OrderPage
};
