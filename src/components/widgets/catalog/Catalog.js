import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";

import { Card, Message } from 'semantic-ui-react';

import ProductCard from '~/src/components/widgets/catalog/ProductCard';
import TextBox from '~/src/components/widgets/catalog/elements/TextBox';

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
    this.handleDismiss = this.handleDismiss.bind(this);
  }

  handleDismiss() {
    this.setState({ visible: false });
  }

  renderCatalog(productCards) {
    return (
      <div>
        <h3>
          <TextBox>Catalog</TextBox>
        </h3>
        <Card.Group stackable centered >
          {productCards}
        </Card.Group>
      </div>
    )
  }

  render() {
    const { products } = this.props;
    const state = this.props.location.state;
    const productCards = products.map((product) => {
      return (
        <div key={product.id} className='card-container'>
          <ProductCard product={product} />
        </div>
      );
    });

    if (this.state.visible && state && state.message) {
      return (
        <div>
          <Message onDismiss={this.handleDismiss} content={state.message} />
          {this.renderCatalog(productCards)}
        </div>
      )
    }
    return (
      this.renderCatalog(productCards)
    )
  }
}

Catalog.propTypes = {
  products: PropTypes.arrayOf(ProductCard.propTypes.product),
  state: PropTypes.object
};

export default withRouter(Catalog);
