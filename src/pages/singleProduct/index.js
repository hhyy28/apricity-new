import React from 'react';
import PropTypes from 'prop-types';
import { SingleProductTemplate } from '@templates/index';

export default function SingleProductPage({ textConstants, error }) {
  if (error) {
    return <div>Error: {error}</div>;
  }

  return <SingleProductTemplate textConstants={textConstants} />;
}

export const getServerSideProps = async () => {
  try {
    const baseUrl = `http://${req.headers.host}`;
    const response = await fetch(`${baseUrl}/api/collections`);

    if (!response.ok) {
      throw new Error('Failed to load data');
    }

    const productData = await response.json();

    return {
      props: {
        productData,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error.message,
      },
    };
  }
};

SingleProductPage.propTypes = {
  textConstants: PropTypes.shape({
    home: PropTypes.object.isRequired,
    demonstration: PropTypes.object.isRequired,
    collectionText: PropTypes.object.isRequired,
    bottomData: PropTypes.object.isRequired,
  }).isRequired,
  error: PropTypes.string,
};
