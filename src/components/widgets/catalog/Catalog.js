import React, { Component } from 'react';

import ProductCard from '~/src/components/widgets/catalog/ProductCard';
import TextBox from '~/src/components/widgets/catalog/elements/TextBox';

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
      <div>
        <h3>
          <TextBox>Catalog</TextBox>
        </h3>
        <div className='container'>
          {productCards}
        </div>
      </div>
    );
  }
}
