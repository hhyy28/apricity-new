import React from 'react';
import PropTypes from 'prop-types';
import CSSGrid, { gridTheme } from '@components/bootstrap-grid';
import Home from '@components/home';
import Demonstrations from '@components/demonstration';
import DemonstrationExpanded from '@components/demonstrationExpandedComponent';
import CollectionComponent from '@components/studio';
import BottomComponent from '@components/bottomComponent';

export default function ByCollectionPage({ textConstants }) {
  const { home, demonstration, collectionText, bottomData } = textConstants;
  return (
    <CSSGrid gridTheme={gridTheme}>
      <Home home={home} />
      <Demonstrations demonstration={demonstration} />
      <CollectionComponent collectionText={collectionText} />
      <DemonstrationExpanded demonstration={demonstration} />
      <BottomComponent bottomData={bottomData} />
    </CSSGrid>
  );
}

ByCollectionPage.propTypes = {
  textConstants: PropTypes.shape({
    home: PropTypes.object.isRequired,
    demonstration: PropTypes.object.isRequired,
    collectionText: PropTypes.object.isRequired,
    bottomData: PropTypes.object.isRequired,
  }).isRequired,
};
