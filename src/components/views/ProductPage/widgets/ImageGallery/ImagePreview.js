import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Image, Button } from 'semantic-ui-react';

const ImagePreview = ({ selectedUrl }) => (
  <Image style={{'left': '20%'}} src={selectedUrl} size='large' />
);

ImagePreview.propTypes = {
  selectedUrl: PropTypes.string.isRequired
};

export default ImagePreview;
