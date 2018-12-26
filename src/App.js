/* globals __CLIENT__, __SERVER__ */
import React, { Component } from 'react';
import {
  Router, StaticRouter, Route, Switch, NavLink
} from 'react-router-dom';
import { Provider } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';

import DevTools from 'containers/DevTools';

import routes from 'routes';

import MenuBar from 'components/widgets/MenuBar.js';
import Layout from 'components/Layout.js';

const AppRouter = ({ history, children, location, context }) => {
  if (__CLIENT__)
    return (
      <Router history={history}>{children}</Router>
    );
  if (__SERVER__)
    return (
      <StaticRouter location={location} context={context}>{children}</StaticRouter>
    );
}

const RouteWithSubroutes = (route, key) => (
  <Route key={key} {...route} />
);

const App = ({ history, store, location, context }) => (
  <Provider store={store}>
    <div>
      <AppRouter history={history} context={context} location={location}>
        <div>
          <MenuBar />
          <Layout>
            <Switch>
            {routes.map((route, key) => RouteWithSubroutes(route, key))}
            </Switch>
          </Layout>
        </div>
      </AppRouter>
      <DevTools />
    </div>
  </Provider>
);

export default App;
