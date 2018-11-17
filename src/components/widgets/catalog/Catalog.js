import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductCard from '~/src/components/widgets/catalog/ProductCard';
import TextBox from '~/src/components/widgets/catalog/elements/TextBox';
import Cart from '~/src/components/widgets/catalog/elements/Cart';

import styles from '~/src/components/widgets/catalog/Catalog.css';

export default class Catalog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products } = this.props;
    const productCards = products.map((product) => {
      return (
        <div key={product.id} className='card-container'>
          <ProductCard product={product} />
        </div>
      );
    });

    return (
      <div className='container'>
        <div className='header'>
          <h3>
            <TextBox>Catalog</TextBox>
          </h3>
          <Cart />
        </div>
        <div className='content'>
          {productCards}
        </div>
      </div>
    );
  }
}

Catalog.propTypes = {
  products: PropTypes.arrayOf(ProductCard.propTypes.product)
};
