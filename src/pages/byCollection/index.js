import React from 'react';
import PropTypes from 'prop-types';
import { ByCollectionTemplate } from '@templates/index';

export default function ByCollectionPage({ textConstants, error }) {
  if (error) {
    return <div>Error: {error}</div>;
  }

  return <ByCollectionTemplate textConstants={textConstants} />;
}

export const getServerSideProps = async ({ req }) => {
  try {
    const baseUrl = `http://${req.headers.host}`;
    const response = await fetch(`${baseUrl}/api/collections`);

    if (!response.ok) {
      throw new Error('Failed to load data');
    }

    const collectionData = await response.json();

    return {
      props: {
        collectionData,
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

ByCollectionPage.propTypes = {
  textConstants: PropTypes.object.isRequired,
  error: PropTypes.string,
};
