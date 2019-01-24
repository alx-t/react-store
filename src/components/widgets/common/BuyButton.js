import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux'
import { addItem } from 'actions/Cart';

class BuyButton extends Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 1 };
  }

  setField(e) {
    this.setState({
      quantity: e.target.value
    })
  }

  render()  {
    const { item, addItem } = this.props;
    return (
      <div>
        <input
          onChange={(e) => this.setField(e)}
          value={this.state.quantity}
        />
        <button onClick={() => addItem({
            'id': item.id, 'title': item.title, 'quantity': this.state.quantity, 'price': item.price
        })}>
          Buy
        </button>
      </div>
    );
  }
}

BuyButton.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

const actionsToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
});

const stateToProps = (state) => ({
  items: state.cart.entries,
  total: state.cart.total
});

export default connect(stateToProps, actionsToProps)(BuyButton);
