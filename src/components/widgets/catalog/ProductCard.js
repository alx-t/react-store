import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import { productPath } from '~/src/helpers/routes';

import { Card } from 'semantic-ui-react';

import TextBox from '~/src/components/widgets/catalog/elements/TextBox';
import Price from '~/src/components/widgets/catalog/elements/Price';
import Image from '~/src/components/widgets/catalog/elements/Image';
import BuyButton from '~/src/components/widgets/catalog/elements/BuyButton';

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.handleDragStart = this.handleDragStart.bind(this);
  }

  handleDragStart(e) {
    e.dataTransfer.setData('item', JSON.stringify(this.props.product));
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
      <Card
          as={NavLink} to={productPath(product.id)}
          draggable='true'
          onDragStart={this.handleDragStart}>
        <Image
          alt={image.alt}
          src={image.src}
          width={image.width}
          height={image.height}
        />
        <Card.Content>
          <Card.Header>{product.title}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Price>{product.price}</Price>
          <BuyButton item={product} />
        </Card.Content>
      </Card>
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
