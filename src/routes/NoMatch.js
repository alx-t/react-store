import React from 'react';

export default {
  render: ({ staticContext }) => {
    if (staticContext) {
      staticContext.status = 404;
    }
    return <h3>404: Not Found</h3>;
  }
};
