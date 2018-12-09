import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { Menu } from 'semantic-ui-react';

import {
  mainPath, aboutPath, catalogPath, productPath, cartPath
} from '~/src/helpers/routes';

import Cart from '~/src/components/widgets/common/Cart';

class MenuBar extends Component {
  render () {
    return (
      <div>
        <Menu secondary>
          <Menu.Item
            name='main'
            as={NavLink}
            exact to={mainPath()}>Main
          </Menu.Item>

          <Menu.Item
            name='catalog'
            as={NavLink}
            to={catalogPath()}>Catalog
          </Menu.Item>

          <Menu.Item
            name='about'
            as={NavLink}
            to={aboutPath()}>About
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item
              name='cart'
              as={NavLink}
              to={cartPath()}><Cart />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default MenuBar;
