import React from 'react';
import PropTypes from 'prop-types';
import CSSGrid, { gridTheme } from '@components/bootstrap-grid';
import Home from '@components/home';
import CollectionComponent from '@components/collectionComponent';
import Demonstrations from '@components/demonstration/demonstrationShort';
import DemonstrationExpanded from '@components/demonstration/demonstrationExpanded';
import AlternativeBottomComponent from '@components/footer/alternative';

export default function StudioTemplate({ textConstants, collection }) {
  const { home, demonstration, collectionText, bottomData } = textConstants;

  return (
    <CSSGrid gridTheme={gridTheme}>
      <Home home={home} collection={collection} />
      <CollectionComponent
        collectionText={collectionText}
        collection={collection}
      />
      <Demonstrations demonstration={demonstration} collection={collection} />
      <DemonstrationExpanded
        demonstration={demonstration}
        collection={collection}
      />
      <AlternativeBottomComponent
        bottomData={bottomData}
        collection={collection}
      />
    </CSSGrid>
  );
}

StudioTemplate.propTypes = {
  textConstants: PropTypes.shape({
    home: PropTypes.object.isRequired,
    demonstration: PropTypes.object.isRequired,
    collectionText: PropTypes.object.isRequired,
    bottomData: PropTypes.object.isRequired,
  }).isRequired,
  collection: PropTypes.array,
};
