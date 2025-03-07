import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@context/themeContext';
import { Wrapper } from './styled';
import HomeHeader from './homeHeader/index';
import HomeContent from './homeContent';

export default function Home({ home, collection }) {
  const { homeMenu, homeHeader } = home;
  const { backgroundColor } = useTheme();

  return (
    <Wrapper style={{ background: backgroundColor }}>
      <HomeHeader homeHeader={homeHeader} />
      <HomeContent homeMenu={homeMenu} collection={collection} />
    </Wrapper>
  );
}

Home.propTypes = {
  home: PropTypes.shape({
    homeMenu: PropTypes.object.isRequired,
    homeHeader: PropTypes.object.isRequired,
  }).isRequired,
  collection: PropTypes.array,
};
