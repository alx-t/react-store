import React from 'react';

import MainPage from 'components/views/MainPage';
import { mainPath } from 'helpers/routes';

export default {
  path: mainPath(),
  component: MainPage,
  exact: true,
  strict: true
};
