import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'semantic-ui-react'

const Layout = ({ children }) => (
  <Container>
    {children}
  </Container>
);

Layout.propTypes = {
  children: PropTypes.instanceOf(Object)
};

export default Layout;
