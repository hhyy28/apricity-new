import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import SwiperSlider from '@components/home/homeMobile/swiper-slider';
import { Option, OptionMenu } from './styled';
import SwiperPagination from './swiper-pagination';

export default function HomeMobile({ homeMenu }) {
  const swiperRef = useRef(null);

  return (
    <>
      <OptionMenu>
        <Option>{homeMenu.refineOption}</Option>
        <Option>{homeMenu.sortOption}</Option>
      </OptionMenu>
      <SwiperSlider homeMenu={homeMenu} swiperRef={swiperRef} />
      <SwiperPagination swiperInstance={swiperRef.current} />
    </>
  );
}

HomeMobile.propTypes = {
  homeMenu: PropTypes.shape({
    refineOption: PropTypes.string.isRequired,
    sortOption: PropTypes.string.isRequired,
    collectionLabel: PropTypes.string.isRequired,
    collectionName: PropTypes.string.isRequired,
    notebookLabel: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        link: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};
