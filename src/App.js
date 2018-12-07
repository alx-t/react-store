import React, { Component } from 'react';
import {
  Router, Route, Switch, NavLink, matchPath
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { parse } from 'qs';
import prepareData from '~/src/helpers/prepareData';

import 'semantic-ui-css/semantic.min.css';

import DevTools from '~/src/containers/DevTools';

import routes from '~/src/routes';
import store from '~/src/store';

import MenuBar from '~/src/components/widgets/MenuBar.js';

import { createBrowserHistory } from 'history';
let history = createBrowserHistory();

history.listen((location, action = 'PUSS') => {
  const state = { params: {}, query: {}, routes: [] };
  routes.some((route) => {
    const match = matchPath(location.pathname, route);
    if (match) {
      state.routes.push(route);
      Object.assign(state.params, match.params);
      Object.assign(state.query, parse(location.search.substr(1)));
    }
    return match;
  });

  prepareData(store, state);
});

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
