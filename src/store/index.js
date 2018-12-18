import { createStore, applyMiddleware, compose } from 'redux';

import APIMiddleware from '~/src/middleware/API';
import LocalStorageMiddleware from '~/src/middleware/localStorage';

import DevTools from '~/src/containers/DevTools';

import reducers from '~/src/reducers';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(APIMiddleware, LocalStorageMiddleware),
    DevTools.instrument()
  )
);

export default store;
