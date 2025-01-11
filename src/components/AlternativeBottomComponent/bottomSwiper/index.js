import React, { useRef, useState, useEffect } from 'react';
import {
  OptionMenu,
  Option,
  CollectionDef,
  CollectionName,
  CollectionContainer,
  Wrapper,
  FooterContainer,
  FooterSubContainer,
  NotebookInfo,
  OrderButton,
} from './styled';
import PropTypes from 'prop-types';
import SwiperPagination from './swiper-pagination';
import SwiperSlider from './swiper-slider';
import { useScreen } from '@context/ScreenContext';
import { orderButton } from '@svg/index';
import Image from 'next/image';

export default function BottomSwiper({ bottomSwiper }) {
  const swiperRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperRef.current) {
      setSwiperInstance(swiperRef.current);
    }
  }, [swiperRef.current]);

  return (
    <Wrapper>
      <SwiperSlider swiperRef={swiperRef} />
      {swiperInstance && <SwiperPagination swiperInstance={swiperInstance} />}
    </Wrapper>
  );
}

BottomSwiper.propTypes = {
  bottomSwiper: PropTypes.shape({
    refineOption: PropTypes.string.isRequired,
    sortOption: PropTypes.string.isRequired,
    collectionLabel: PropTypes.string.isRequired,
    collectionName: PropTypes.string.isRequired,
    notebookInfo: PropTypes.string.isRequired,
  }).isRequired,
};
