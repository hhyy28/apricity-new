import React from 'react';
import PropTypes from 'prop-types';
import CSSGrid, { gridTheme } from '@components/bootstrap-grid';
import Home from '@components/home';
import CollectionComponent from '@components/studio';
import Demonstrations from '@components/demonstration';
import DemonstrationExpanded from '@components/demonstrationExpandedComponent';
import AlternativeBottomComponent from '@components/AlternativeBottomComponent';

export default function StudioPage({ textConstants }) {
  const { home, demonstration, collectionText, bottomData } = textConstants;

  return (
    <CSSGrid gridTheme={gridTheme}>
      <Home home={home} />
      <CollectionComponent collectionText={collectionText} />
      <Demonstrations demonstration={demonstration} />
      <DemonstrationExpanded demonstration={demonstration} />
      <AlternativeBottomComponent bottomData={bottomData} />
    </CSSGrid>
  );
}

StudioPage.propTypes = {
  textConstants: PropTypes.shape({
    home: PropTypes.object.isRequired,
    demonstration: PropTypes.object.isRequired,
    collectionText: PropTypes.object.isRequired,
    bottomData: PropTypes.object.isRequired,
  }).isRequired,
};
