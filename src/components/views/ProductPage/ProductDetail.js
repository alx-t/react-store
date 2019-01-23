import React from 'react';
import PropTypes from 'prop-types';

import Image from 'components/widgets/common/Image';
import Price from 'components/widgets/common/Price';
import ImageGallery from 'components/views/ProductPage/widgets/ImageGallery';

const ProductDetail = ({ id, title, imageUrls, price }) => {
  console.log('-------- prod det');
  console.log(title);
  return(
  <div>
    <h3>Product: {title}</h3>
    <h4><Price>{price}</Price></h4>
    <ImageGallery imageUrls={imageUrls} />
  </div>
);}

ProductDetail.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired
};

export default ProductDetail;
