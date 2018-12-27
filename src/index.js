import React from 'react';
import ReactDOM from 'react-dom';

import App from 'App';

import { history, historyCb } from 'helpers/history';
import { restoreCart } from 'actions/Cart';
import createStore from 'store';

history.listen(historyCb);
historyCb(window.location);

const store = createStore(window.INITIAL_STATE);
store.dispatch(restoreCart());

ReactDOM.render(
  <App history={history} store={store} />,
  document.getElementById('root'),
  () => {
    delete window.INITIAL_STATE;
  }
);
