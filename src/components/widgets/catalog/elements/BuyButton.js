import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cartContext from '~/src/cartContext';

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
    const item = this.props.item;
    return (
      <cartContext.Consumer>
        {
          ({ cart, addToCart }) => (
            <div>
              <input
                onChange={(e) => this.setField(e)}
                value={this.state.quantity}
              />
              <button onClick={() => addToCart(item.id, item.title, this.state.quantity, item.price)}>
                Buy
              </button>
            </div>
          )
        }
      </cartContext.Consumer>
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

export default BuyButton;
