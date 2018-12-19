import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

const Field = ({ name, value, onChange, label, error }) => (
  <div className={classNames('ui field', { error })}>
    <label htmlFor={name}>{label}:</label>
    <input
      name={name}
      id={name}
      className='ui input'
      type='text'
      value={value}
      onChange={onChange}
    />
  </div>
);

Field.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.object
};

export default Field;
