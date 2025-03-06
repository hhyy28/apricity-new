import React from 'react';
import PropTypes from 'prop-types';
import { StudioTemplate } from '@templates/index';

export default function StudioPage({ textConstants, collection, error }) {
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <StudioTemplate textConstants={textConstants} collection={collection} />
  );
}

export const getServerSideProps = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/collections');

    if (!response.ok) {
      throw new Error('Failed to load data');
    }

    const collection = await response.json();

    return {
      props: {
        collection,
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

StudioPage.propTypes = {
  textConstants: PropTypes.shape({
    home: PropTypes.object.isRequired,
    demonstration: PropTypes.object.isRequired,
    collectionText: PropTypes.object.isRequired,
    bottomData: PropTypes.object.isRequired,
  }).isRequired,
  collection: PropTypes.array,
  error: PropTypes.string,
};
