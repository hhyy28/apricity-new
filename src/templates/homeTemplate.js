import React from 'react';
import PropTypes from 'prop-types';
import CSSGrid, { gridTheme } from '@components/bootstrap-grid';
import {
  BottomComponent,
  CollectionComponent,
  Demonstration,
  DemonstrationExpanded,
  Home,
} from '@components/index';

export default function HomeTemplate({ textConstants, collection }) {
  const { home, demonstration, collectionText, bottomData } = textConstants;
  return (
    <CSSGrid gridTheme={gridTheme}>
      <Home home={home} collection={collection} />
      <Demonstration demonstration={demonstration} collection={collection} />
      <CollectionComponent collectionText={collectionText} collection={collection} />
      <DemonstrationExpanded demonstration={demonstration} collection={collection} />
      <BottomComponent bottomData={bottomData} collection={collection} />
    </CSSGrid>
  );
}

HomeTemplate.propTypes = {
  textConstants: PropTypes.shape({
    home: PropTypes.object.isRequired,
    demonstration: PropTypes.object.isRequired,
    collectionText: PropTypes.object.isRequired,
    bottomData: PropTypes.object.isRequired,
  }).isRequired,
  collection: PropTypes.array
};
