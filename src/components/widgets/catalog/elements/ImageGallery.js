import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Segment } from 'semantic-ui-react';

import ImagePreview from './ImageGallery/ImagePreview';
import ImageList from './ImageGallery/ImageList';
import NavButtons from './ImageGallery/NavButtons';

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: 0
    };
    this.onSelect = this.onSelect.bind(this);
    this.onLeft = this.onLeft.bind(this);
    this.onRight = this.onRight.bind(this);
  }

  onLeft() {
    if (this.state.selectedImage > 0) {
      this.setState((prevState) => ({ selectedImage: prevState.selectedImage - 1 }));
    }
  }

  onRight() {
    if (this.state.selectedImage < this.props.imageUrls.length - 1) {
      this.setState((prevState) => ({ selectedImage: prevState.selectedImage + 1 }));
    }
  }

  onSelect(key) {
    this.setState((prevState) => ({ selectedImage: key }));
  }

  render() {
    const { imageUrls } = this.props;
    return (
      <Segment>
        <Segment.Inline>
          <ImagePreview selectedUrl={imageUrls[this.state.selectedImage]} />
        </Segment.Inline>
        <Segment.Inline>
          <NavButtons onLeft={this.onLeft} onRight={this.onRight}/>
        </Segment.Inline>
        <Segment.Inline>
          <ImageList imageUrls={imageUrls} selectedImage={this.state.selectedImage} onSelect={this.onSelect}/>
        </Segment.Inline>
      </Segment>
    );
  }
}

ImageGallery.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ImageGallery;
