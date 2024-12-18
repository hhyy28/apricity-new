import Home from '@components/home';
import CollectionComponent from '@components/studio';
import Demonstrations from '@components/demonstration';
import CSSGrid, { gridTheme } from 'src/components/bootstrap-grid';
import DemonstrationExpanded from '@components/home/demonstrationExpandedComponent';
import React from 'react';

export default function HomePage({ homePage }) {
  const { home, demonstration } = homePage;
  return (
    <>
      <CSSGrid gridTheme={gridTheme}>
        <Home home={home} />
        <Demonstrations demonstration={demonstration} />
        <CollectionComponent />
        <DemonstrationExpanded demonstration={demonstration}/>
      </CSSGrid>
    </>
  );
}
