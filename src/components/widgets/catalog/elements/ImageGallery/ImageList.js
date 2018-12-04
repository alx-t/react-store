import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Image, Grid } from 'semantic-ui-react';

const ImageList = ({ selectedImage, imageUrls, onSelect }) => (
  <Image.Group size='small'>
    {imageUrls.map((url, key) => {
      if (selectedImage == key) {
        return <Image
        src={url}
        key={key}
        bordered
        style={{'border': '5px solid rgba(0,0,0,.1)'}}
        onClick={() => onSelect(key)} />
      }
      return <Image src={url} key={key} onClick={() => onSelect(key)} />
    })}
  </Image.Group>
);

ImageList.propTypes = {
  selectedImage: PropTypes.number.isRequired,
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default ImageList;
