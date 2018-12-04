import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Image } from 'semantic-ui-react';

const ImagePreview = ({ selectedUrl }) => (
  <Image src={selectedUrl} size='large' />
);

ImagePreview.propTypes = {
  selectedUrl: PropTypes.string.isRequired
};

export default ImagePreview;
