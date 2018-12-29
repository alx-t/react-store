import React from 'react';

import { set } from 'lodash/object';

import Helmet from 'react-helmet';

import Field from './Field';
import FieldArea from './FieldArea';

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        values: {
          fullName: '',
          email: '',
          message: ''
        },
        errors: {}
      }
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(this.state.form.values));
  }

  handleChange(fieldName) {
    return (e) => {
      switch (fieldName) {
        case 'email':
          this.clearError('email');
          const emailValid = e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          if (!emailValid) {
            this.setState(set(
              Object.assign({}, this.state), ['form', 'errors', 'email'], true
            ));
          }
          break;
      }
      this.setState(set(
        Object.assign({}, this.state), ['form', 'values', fieldName], e.target.value
      ))
    };
  }

  clearError(fieldName) {
    this.setState(set(
      Object.assign({}, this.state), ['form', 'errors', fieldName], false
    ));
  }

  render() {
    const { fullName, email, message } = this.state.form.values;
    return (
      <div>
        <Helmet>
          <title>About page</title>
          <meta name="description" content="Thinknetica React Stor" />
          <meta name="keywords" content="Thinknetica React Stor" />
        </Helmet>
        <h3>About page</h3>
        <h4>Contacts</h4>
        <form onSubmit={this.onSubmit} className='ui form'>
          <Field
            name='fullName'
            label='Full name'
            value={fullName}
            onChange={this.handleChange('fullName')}
          />
          <Field
            name='email'
            label='Email'
            value={email}
            error={this.state.form.errors.email}
            onChange={this.handleChange('email')}
          />
          <FieldArea
            name='message'
            label='Message'
            value={message}
            onChange={this.handleChange('message')}
          />
          <input type='submit' value='Submit' className='ui button primary' />
        </form>
      </div>
    );
  }
}

export default AboutPage;
