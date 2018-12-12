import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './NavButtons.css';

const NavButtons = ({ onLeft, onRight }) => (
  <div>
    <div className='navButton leftArrow' onClick={() => onLeft()} />
    <div className='navButton rightArrow' onClick={() => onRight()} />
  </div>
);

NavButtons.propTypes = {
  onLeft: PropTypes.func.isRequired,
  onRight: PropTypes.func.isRequired
};

export default NavButtons;
