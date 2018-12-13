import React from 'react';

import { connect } from 'react-redux';
import { restoreCart } from '~/src/actions/Cart';

class AppLoader extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.restoreCart();
  }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

const actionsToProps = (dispatch) => ({
  restoreCart: () => dispatch(restoreCart())
});

const stateToProps = (state) => ({})

export default connect(stateToProps, actionsToProps)(AppLoader);
