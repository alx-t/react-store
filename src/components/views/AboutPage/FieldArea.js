import React from 'react';
import PropTypes from 'prop-types';

const FieldArea = ({ name, value, onChange, label }) => (
  <div className='ui field'>
    <label htmlFor={name}>{label}:</label>
    <textarea
      name={name}
      id={name}
      className='ui input'
      value={value}
      onChange={onChange}
    />
  </div>
);

FieldArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default FieldArea;
