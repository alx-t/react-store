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
  }

  render() {
    const { id, title, price, imageUrl } = this.props.product;
    const image = {
        alt: 'Oops, no image',
        src: imageUrl,
        width: 200,
        height: 150
      };
    return (
      <div className='card'>
        <div className='card-header'>
          <TextBox>{title}</TextBox>
        </div>
        <div className='card-main'>
          <Image
            alt={image.alt}
            src={image.src}
            width={image.width}
            height={image.height}
          />
          <div className='main-description'>
            <Price>{price}</Price>
            <BuyButton item={{ id, title, price }} />
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
    imageUrl: PropTypes.string.isRequired
  })
};
