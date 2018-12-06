import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Switch, NavLink
} from 'react-router-dom';
import { Provider } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';

import DevTools from '~/src/containers/DevTools';

import routes from '~/src/routes';
import store from '~/src/store';

import MenuBar from '~/src/components/widgets/MenuBar.js';

const RouteWithSubroutes = (route, key) => (
  <Route key={key} {...route} />
);

const App = () => (
  <Provider store={store}>
    <div>
      <Router>
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
