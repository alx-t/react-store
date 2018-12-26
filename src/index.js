import React from 'react';
import ReactDOM from 'react-dom';

import App from 'App';

import { history, historyCb } from 'helpers/history';
import { restoreCart } from 'actions/Cart';
import store from 'store';

history.listen(historyCb);
historyCb(window.location);

store.dispatch(restoreCart());

ReactDOM.render(
  <App history={history} store={store} />,
  document.getElementById('root')
);
