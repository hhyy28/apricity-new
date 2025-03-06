import React from 'react';
import PropTypes from 'prop-types';
import CSSGrid, { gridTheme } from '@components/bootstrap-grid';
import Home from '@components/home';
import Demonstrations from '@components/demonstration/demonstrationShort';
import DemonstrationExpanded from '@components/demonstration/demonstrationExpanded';
import CollectionComponent from '@components/collectionComponent';
import BottomComponent from '@components/footer/bottom';

export default function ByProductPageTemplate({ textConstants, collection }) {
  const { home, demonstration, collectionText, bottomData } = textConstants;
  return (
    <CSSGrid gridTheme={gridTheme}>
      <Home home={home} />
      <Demonstrations demonstration={demonstration} collection={collection} />
      <CollectionComponent
        collectionText={collectionText}
        collection={collection}
      />
      <DemonstrationExpanded
        demonstration={demonstration}
        collection={collection}
      />
      <BottomComponent bottomData={bottomData} collection={collection} />
    </CSSGrid>
  );
}

ByProductPageTemplate.propTypes = {
  textConstants: PropTypes.shape({
    home: PropTypes.object.isRequired,
    demonstration: PropTypes.object.isRequired,
    collectionText: PropTypes.object.isRequired,
    bottomData: PropTypes.object.isRequired,
  }).isRequired,
  collection: PropTypes.array,
};
