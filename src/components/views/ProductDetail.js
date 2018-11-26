import React from 'react';
import PropTypes from 'prop-types';

import Image from '~/src/components/widgets/catalog/elements/Image';
import Price from '~/src/components/widgets/catalog/elements/Price';

const ProductDetail = ({ id, title, imageUrls, price }) => (
  <div>
    <h3>Product: {title}</h3>
    <h4><Price>{price}</Price></h4>
    {imageUrls.map((url, key) => <Image key={key} src={url} alt='product image' width={400} height={300}/>)}
  </div>
);

ProductDetail.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired
};

export default ProductDetail;
