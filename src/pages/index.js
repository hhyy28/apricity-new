import React from 'react';
import PropTypes from 'prop-types';
import { HomeTemplate } from '@templates/index';

export default function HomePage({ textConstants }) {
  return <HomeTemplate textConstants={textConstants} />;
}

HomePage.propTypes = {
  textConstants: PropTypes.shape({
    home: PropTypes.object.isRequired,
  }).isRequired,
};
