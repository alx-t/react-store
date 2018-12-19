import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { sendOrder } from '~/src/actions/Order';
import Order from './Order';

const validate = (values) => {
  const errors = {};

  if (values.fullName && values.fullName.length < 5)
    errors.fullName = 'Length of full name must be > 5';
  if (values.address && values.address.length < 5)
    errors.address = 'Length of full name must be > 5';
  if (values.email && !(values.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)))
    errors.email = 'Wrong email';
  if (values.phone && !(values.phone.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)))
    errors.phone = 'Wrong email';

  return errors;
}

const stateToProps = (state) => ({
  items: state.cart.entries,
  total: state.cart.total,
  isError: state.order.isError,
  isSuccess: state.order.isSuccess,
  initialValues: {
    items: state.cart.entries,
    total: state.cart.total
  }
});

export default connect(stateToProps)(reduxForm({
  form: 'orderForm',
  validate,
  onSubmit: (values, dispatch) => dispatch(sendOrder(values))
})(Order));
