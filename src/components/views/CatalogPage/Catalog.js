import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Helmet from 'react-helmet';

import { Card, Message } from 'semantic-ui-react';

import ProductCard from './ProductCard';
import TextBox from 'components/widgets/common/TextBox';

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
        <Helmet>
          <title>Cats products</title>
        </Helmet>
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
    const { products, location } = this.props;
    const productCards = products.map((product) => {
      return (
        <div key={product.id} className='card-container'>
          <ProductCard product={product} />
        </div>
      );
    });

    if (this.state.visible && location.state && location.state.message) {
      return (
        <div>
          <Message onDismiss={this.handleDismiss} content={location.state.message} />
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
  products: PropTypes.arrayOf(ProductCard.propTypes.product)
};

export default withRouter(Catalog);
