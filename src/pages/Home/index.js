import React from 'react';
import CollectionComponent from '@components/studio';
import DemonstrationExpanded from '@components/demonstrationExpandedComponent';
import Demonstrations from '@components/demonstration';
import Home from '@components/home';
import CSSGrid, { gridTheme } from '@components/bootstrap-grid';
import PropTypes from 'prop-types';
import BottomComponent from '@components/bottomComponent';

export default function HomePage({ homePage }) {
  const { home, demonstration, collectionText } = homePage;
  return (
    <>
      <CSSGrid gridTheme={gridTheme}>
        {/* <Home home={home} />
        <Demonstrations demonstration={demonstration} />
        <CollectionComponent collectionText={collectionText} />
        <DemonstrationExpanded demonstration={demonstration} /> */}
        <BottomComponent bottomData={bottomData} />
      </CSSGrid>
    </>
  );
}

HomePage.propTypes = {
  homePage: PropTypes.shape({
    home: PropTypes.object.isRequired,
    demonstration: PropTypes.object.isRequired,
    collectionText: PropTypes.object.isRequired,
    bottomData: PropTypes.object.isRequired
  }).isRequired,
};
