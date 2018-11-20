import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextBox from '~/src/components/widgets/catalog/elements/TextBox';
import Price from '~/src/components/widgets/catalog/elements/Price';
import Image from '~/src/components/widgets/catalog/elements/Image';
import BuyButton from '~/src/components/widgets/catalog/elements/BuyButton';

import styles from '~/src/components/widgets/catalog/ProductCard.css';

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = { product: this.props.product }

    this.handleDragStart = this.handleDragStart.bind(this);
  }

  handleDragStart(e) {
    const product = this.state.product;
    e.dataTransfer.setData('item', JSON.stringify(product));
  }

  render() {
    const product = this.props.product;
    const image = {
        alt: 'Oops, no image',
        src: product.imageUrls[0],
        width: 200,
        height: 150
      };
    return (
      <div
          className='card'
          draggable='true'
          onDragStart={this.handleDragStart}>
        <div className='card-header'>
          <TextBox>{product.title}</TextBox>
        </div>
        <div className='card-main'>
          <Image
            alt={image.alt}
            src={image.src}
            width={image.width}
            height={image.height}
          />
          <div className='main-description'>
            <Price>{product.price}</Price>
            <BuyButton item={product} />
          </div>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired
  })
};
