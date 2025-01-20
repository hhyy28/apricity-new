import React from 'react';
import PropTypes from 'prop-types';
import CSSGrid, { gridTheme } from '@components/bootstrap-grid';
import { 
  BottomComponent, 
  CollectionComponent, 
  Demonstration, 
  DemonstrationExpanded, 
  Home 
 } from '@components/index';

export default function HomeTemplate({ textConstants }) {
  const { home, demonstration, collectionText, bottomData } = textConstants;
  return (
    <CSSGrid gridTheme={gridTheme}>
      <Home home={home} />
      <Demonstration demonstration={demonstration} />
      <CollectionComponent collectionText={collectionText} />
      <DemonstrationExpanded demonstration={demonstration} />
      <BottomComponent bottomData={bottomData} />
    </CSSGrid>
  );
}

HomeTemplate.propTypes = {
  textConstants: PropTypes.shape({
    home: PropTypes.object.isRequired,
  }).isRequired,
};

