import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

import { catalogPath, orderPath } from '~/src/helpers/routes';
import { clearCart } from '~/src/actions/Cart';

import CartDetail from '~/src/components/widgets/common/CartDetail';

class CartPage extends Component {
  renderCart() {
    const { items, total } = this.props;
    let result;
    if (items.length > 0) {
      result = (
        <div>
          <h3>Cart Page</h3>
          <CartDetail items={items} total={total} />
          <Button onClick={() => this.props.clearCart()}>Clear</Button>
          <Button as={Link} to={orderPath()}>Order</Button>
        </div>
      );
    } else {
      result = (<Redirect to={{
        pathname: catalogPath(),
        state: { message: 'Cart is empty' }
      }} />);
    }
    return result;
  }

  render() {
    return (
      this.renderCart()
    );
  }
}

const actionsToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart())
});

const stateToProps = (state) => ({
  items: state.cart.entries,
  total: state.cart.total
});

export default connect(stateToProps, actionsToProps)(CartPage);
