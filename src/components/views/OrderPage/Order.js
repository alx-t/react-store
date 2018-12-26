import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import classNames from 'classnames';

import CartDetail from 'components/widgets/common/CartDetail';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={classNames('ui field', { error })}>
    <label>{label}</label>
    <input className='ui input' {...input} type={type} />
    {touched && (error && (
      <div className='ui red label'>{error}</div>
    ))}
  </div>
);

class Order extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items, total, isError, errorMessage, handleSubmit } = this.props;
    return (
      <div>
        <h3>Order Page</h3>
        <CartDetail items={items} total={total} />
        <br/>
        <h3>Customer</h3>
        {isError && (<div className='ui red label'>Error sending Order: {errorMessage}</div>)}
        <form onSubmit={handleSubmit} className='ui form'>
          <Field label='Full name' component={renderField} type='text' name='fullName' />
          <Field label='Phone' component={renderField} type='text' name='phone' />
          <Field label='Email' component={renderField} type='text' name='email' />
          <Field label='Address' component={renderField} type='text' name='address' />
          <input type='submit' className='ui button primary' value='Send' />
        </form>
      </div>
    )
  }
}

Order.propTypes = {
  items: PropTypes.arrayOf(Object).isRequired,
  total: PropTypes.number.isRequired,
  isError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
};

export default Order;
