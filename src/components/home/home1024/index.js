import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { MenuContainer, FooterContainer, Option, OptionMenu } from './styled';
import SwiperPagination from './swiper-pagination';
import SwiperSlider from './swiper-slider';

export default function Home1024({ homeMenu }) {
  const swiperRef = useRef(null);
  const { refineOption, sortOption } = homeMenu;

  return (
    <>
      <MenuContainer>
        <SwiperSlider swiperRef={swiperRef} />
        <OptionMenu>
          <Option>{refineOption}</Option>
          <Option>{sortOption}</Option>
        </OptionMenu>
      </MenuContainer>
      <FooterContainer>
        <SwiperPagination swiperInstance={swiperRef.current} />
      </FooterContainer>
    </>
  );
}

Home1024.propTypes = {
  homeMenu: PropTypes.shape({
    refineOption: PropTypes.string.isRequired,
    sortOption: PropTypes.string.isRequired,
  }).isRequired,
};
