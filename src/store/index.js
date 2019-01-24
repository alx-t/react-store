/* globals __CLIENT__ */
import { createStore, applyMiddleware, compose } from 'redux';

import APIMiddleware from 'middleware/API';
import LocalStorageMiddleware from 'middleware/localStorage';

import DevTools from 'containers/DevTools';

import reducers from 'reducers';

export default function (INITIAL_STATE = {}) {
  const composeEnhancers = __CLIENT__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    reducers,
    INITIAL_STATE,
    composeEnhancers(
      applyMiddleware(APIMiddleware, LocalStorageMiddleware),
      DevTools.instrument()
    )
  );
}

// const store = createStore(
//   reducers,
//   window.INITIAL_STATE,
//   compose(
//     applyMiddleware(APIMiddleware, LocalStorageMiddleware),
//     DevTools.instrument()
//   )
// );

// export default store;
