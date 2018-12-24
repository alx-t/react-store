import React, { Component } from 'react';

class CartDetail extends Component {
  renderItems(items) {
    return (
      <ul>
        {items.map((item, key) => (
          <li key={key}>{item.title} >>> {item.quantity} * {item.price} >>> {item.total} </li>)
        )}
      </ul>
    );
  }

  render() {
    const { items, total } = this.props;
    return (
      <div>
        {this.renderItems(items)}
        <h4>Total: {total}</h4>
      </div>
    );
  }
}

export default CartDetail;
