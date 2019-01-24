import React from 'react';

import OrderPage from 'components/views/OrderPage';
import { orderPath } from 'helpers/routes';

export default {
  path: orderPath(),
  component: OrderPage
};
