import React from 'react';
import PropTypes from 'prop-types';

const Price = (props) => (
  <span>${props.children}</span>
);

Price.propTypes = {
  children: PropTypes.number.isRequired
};

export default Price;
