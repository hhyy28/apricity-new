import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styled';
import HomeHeader from './homeHeader/index';
import HomeContent from './homeContent';
export default function Home({ home, collection }) {
  const { homeMenu, homeHeader } = home;

  return (
    <Wrapper>
      <HomeHeader homeHeader={homeHeader} />
      <HomeContent homeMenu={homeMenu} collection={collection}/>
    </Wrapper>
  );
}

Home.propTypes = {
  home: PropTypes.shape({
    homeMenu: PropTypes.object.isRequired,
    homeHeader: PropTypes.object.isRequired,
  }).isRequired,
  collection: PropTypes.object
};
