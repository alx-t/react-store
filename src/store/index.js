import { createStore, applyMiddleware, compose } from 'redux';

import APIMiddleware from 'middleware/API';
import LocalStorageMiddleware from 'middleware/localStorage';

import DevTools from 'containers/DevTools';

import reducers from 'reducers';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(APIMiddleware, LocalStorageMiddleware),
    DevTools.instrument()
  )
);

export default store;
