import { createStore, applyMiddleware, compose } from 'redux';

import APIMiddleware from '~/src/middleware/API';
import DevTools from '~/src/containers/DevTools';

import reducers from '~/src/reducers';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(APIMiddleware),
    DevTools.instrument()
  )
);

export default store;
