import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Switch, NavLink
} from 'react-router-dom';

import { Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import {
  mainPath, aboutPath, catalogPath, productPath
} from '~/src/helpers/routes';
import routes from '~/src/routes';

import Cart from '~/src/components/widgets/catalog/elements/Cart';
import ShoppingCart from '~/src/components/containers/ShoppingCart';

const RouteWithSubroutes = (route, key) => (
  <Route key={key} {...route} />
);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'home' };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Router>
        <ShoppingCart>
          <div>
            <Menu secondary>
              <Menu.Item
                name='main'
                as={NavLink}
                to={mainPath()}
                active={activeItem === 'main'}
                onClick={this.handleItemClick}>Main
              </Menu.Item>

              <Menu.Item
                name='catalog'
                as={NavLink}
                to={catalogPath()}
                active={activeItem === 'catalog'}
                onClick={this.handleItemClick}>Catalog
              </Menu.Item>

              <Menu.Item
                name='about'
                as={NavLink}
                to={aboutPath()}
                active={activeItem === 'about'}
                onClick={this.handleItemClick}>About
              </Menu.Item>
              <Menu.Menu position='right'>
                <Menu.Item
                  name='about'
                  as={NavLink}
                  to={aboutPath()}
                  active={activeItem === 'about'}
                  onClick={this.handleItemClick}><Cart />
                </Menu.Item>
              </Menu.Menu>
            </Menu>
            <Switch>
              {routes.map((route, key) => RouteWithSubroutes(route, key))}
            </Switch>
          </div>
        </ShoppingCart>
      </Router>
    );
  }
}
