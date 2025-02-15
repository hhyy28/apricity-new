import React from 'react';
import { useScreen } from '@context/screenContext';
import { Wrapper } from './styled';
import HomeHeader from './homeHeader/index';
import HomeMobile from './homeMobile/index';
import Home1920 from './home1920/index';
import Home1024 from './home1024/index';

export default function Home({ home }) {
  const { isTabletHorizontal, isPc } = useScreen();

  const { homeMenu, homeHeader } = home;

  const renderContent = () => {
    // if (isPc) {
    //   return <Home1920 homeMenu={homeMenu} />;
    // }
    // if (isTabletHorizontal) {
    //   return <Home1024 homeMenu={homeMenu} />;
    // } else {
      return <HomeMobile homeMenu={homeMenu} />;
    // }
  };

  return (
    <Wrapper>
      <HomeHeader homeHeader={homeHeader} />
      {renderContent(home)}
    </Wrapper>
  );
}
