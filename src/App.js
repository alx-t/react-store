import React, { Component } from 'react';
import {
  Router, Route, Switch, NavLink
} from 'react-router-dom';
import { Provider } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';

import DevTools from 'containers/DevTools';

import { history, historyCb } from 'helpers/history';
import routes from 'routes';
import store from 'store';

import { restoreCart } from 'actions/Cart';

import MenuBar from 'components/widgets/MenuBar.js';
import Layout from 'components/Layout.js';

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
          <Layout>
            <Switch>
            {routes.map((route, key) => RouteWithSubroutes(route, key))}
            </Switch>
          </Layout>
        </div>
      </Router>
      <DevTools />
    </div>
  </Provider>
);

export default App;
