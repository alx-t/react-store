import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Divider, Image } from 'semantic-ui-react';

import ImagePreview from './ImageGallery/ImagePreview';
import ImageList from './ImageGallery/ImageList';

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: 0
    };
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(key) {
    this.setState((prevState) => ({ selectedImage: key }));
  }

  render() {
    const { imageUrls } = this.props;
    return (
      <div>
        <ImagePreview selectedUrl={imageUrls[this.state.selectedImage]} />
        <ImageList imageUrls={imageUrls} selectedImage={this.state.selectedImage} onSelect={this.onSelect}/>
      </div>
    );
  }
}

ImageGallery.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ImageGallery;
