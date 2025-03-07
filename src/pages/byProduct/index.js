import React from 'react';
import PropTypes from 'prop-types';
import { ByProductPageTemplate } from '@templates/index';

export default function ByProductPage({ textConstants, collection, error }) {
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ByProductPageTemplate textConstants={textConstants} collection={collection} />
  );
}

export const getServerSideProps = async ({ req }) => {
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

ByProductPage.propTypes = {
  textConstants: PropTypes.shape({
    home: PropTypes.object.isRequired,
    demonstration: PropTypes.object.isRequired,
    collectionText: PropTypes.object.isRequired,
    bottomData: PropTypes.object.isRequired,
  }).isRequired,
  error: PropTypes.string,
  collection: PropTypes.array,
};
