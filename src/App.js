import React, { Component } from 'react';
import {
  Router, Route, Switch, NavLink
} from 'react-router-dom';
import { Provider } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';

import DevTools from '~/src/containers/DevTools';

import { history, historyCb } from '~/src/helpers/history';
import routes from '~/src/routes';
import store from '~/src/store';

import { restoreCart } from '~/src/actions/Cart';

import MenuBar from '~/src/components/widgets/MenuBar.js';

history.listen(historyCb);
historyCb(window.location);

store.dispatch(restoreCart());

const RouteWithSubroutes = (route, key) => (
  <Route key={key} {...route} />
);

const App = () => (
  <Provider store={store}>
    <div>
      <Router history={history}>
        <div>
          <MenuBar />
          <Switch>
            {routes.map((route, key) => RouteWithSubroutes(route, key))}
          </Switch>
        </div>
      </Router>
      <DevTools />
    </div>
  </Provider>
);

export default App;
