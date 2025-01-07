import React, { useRef, useState, useEffect } from 'react';
import {
  OptionMenu,
  Option,
  CollectionDef,
  CollectionName,
  CollectionContainer,
  Wrapper,
} from './styled';
import PropTypes from 'prop-types';
import SwiperPagination from './swiper-pagination';
import SwiperSlider from './swiper-slider';

export default function BottomSwiper({ bottomSwiper }) {
  const swiperRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const { refineOption, sortOption, collectionLabel, collectionName } = bottomSwiper;

  useEffect(() => {
    if (swiperRef.current) {
      setSwiperInstance(swiperRef.current);
    }
  }, [swiperRef.current]);

  return (
    <Wrapper>
      <SwiperSlider swiperRef={swiperRef} />
      <OptionMenu>
        <Option>{refineOption}</Option>
        <Option>{sortOption}</Option>
      </OptionMenu>
      <CollectionContainer>
        <CollectionDef>{collectionLabel}</CollectionDef>
        <CollectionName>{collectionName}</CollectionName>
      </CollectionContainer>
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
  }).isRequired,
};
