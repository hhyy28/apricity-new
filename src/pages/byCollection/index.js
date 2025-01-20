import React from 'react';
import PropTypes from 'prop-types';
import ByCollectionTemplate from '@templates/byCollectionTemplate';

export default function ByCollectionPage({ textConstants }) {
  return (
    <ByCollectionTemplate textConstants={textConstants}/>
  );
}

ByCollectionPage.propTypes = {
  textConstants: PropTypes.object.isRequired,
};
