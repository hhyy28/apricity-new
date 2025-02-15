import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import SwiperSlider from '@components/home/homeMobile/swiper-slider';

export default function HomeMobile({ homeMenu }) {
  const swiperRef = useRef(null);

  const {
    refineOption,
    sortOption,
    collectionLabel,
    collectionName,
    notebookLabel,
  } = homeMenu;

  return <SwiperSlider homeMenu={homeMenu} />;
}

HomeMobile.propTypes = {
  homeMenu: PropTypes.shape({
    refineOption: PropTypes.string.isRequired,
    sortOption: PropTypes.string.isRequired,
    collectionLabel: PropTypes.string.isRequired,
    collectionName: PropTypes.string.isRequired,
    notebookLabel: PropTypes.string.isRequired,
  }).isRequired,
};
