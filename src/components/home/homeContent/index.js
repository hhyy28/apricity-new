import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import SwiperSlider from '@components/home/homeContent/swiper-slider';
import { Option, OptionMenu, Wrapper } from './styled';
import SwiperPagination from './swiper-pagination';

export default function HomeContent({ homeMenu, collection }) {
  const swiperRef = useRef(null);

  return (
    <Wrapper>
      <OptionMenu>
        <Option>{homeMenu.refineOption}</Option>
        <Option>{homeMenu.sortOption}</Option>
      </OptionMenu>
      <SwiperSlider
        homeMenu={homeMenu}
        collection={collection}
        swiperRef={swiperRef}
      />
      <SwiperPagination swiperInstance={swiperRef.current} />
    </Wrapper>
  );
}

HomeContent.propTypes = {
  homeMenu: PropTypes.shape({
    refineOption: PropTypes.string.isRequired,
    sortOption: PropTypes.string.isRequired,
    collectionLabel: PropTypes.string.isRequired,
  }).isRequired,
  collection: PropTypes.array,
};
