import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Switch, NavLink
} from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

import routes from '~/src/routes';

import MenuBar from '~/src/components/widgets/MenuBar.js';
import ShoppingCart from '~/src/components/containers/ShoppingCart';

const RouteWithSubroutes = (route, key) => (
  <Route key={key} {...route} />
);

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <ShoppingCart>
          <div>
            <MenuBar />
            <Switch>
              {routes.map((route, key) => RouteWithSubroutes(route, key))}
            </Switch>
          </div>
        </ShoppingCart>
      </Router>
    );
  }
}
