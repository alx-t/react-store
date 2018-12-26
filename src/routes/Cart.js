import React from 'react';

import CartPage from 'components/views/CartPage';
import { cartPath } from 'helpers/routes';

export default {
  path: cartPath(),
  component: CartPage
};
