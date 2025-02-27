import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styled';
import HomeHeader from './homeHeader/index';
import HomeMobile from './homeMobile/index';
export default function Home({ home }) {
  const { homeMenu, homeHeader } = home;

  return (
    <Wrapper>
      <HomeHeader homeHeader={homeHeader} />
      <HomeMobile homeMenu={homeMenu} />
    </Wrapper>
  );
}

Home.propTypes = {
  home: PropTypes.shape({
    homeMenu: PropTypes.object.isRequired,
    homeHeader: PropTypes.object.isRequired,
  }).isRequired,
};
