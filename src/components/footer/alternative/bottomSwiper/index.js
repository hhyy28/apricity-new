import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styled';
import SwiperPagination from './swiper-pagination';
import SwiperSlider from './swiper-slider';
import { useTheme } from '@context/themeContext';

export default function BottomSwiper({ bottomSwiper, collection }) {
  const swiperRef1 = useRef(null);
  const swiperRef2 = useRef(null);

  const { backgroundColor } = useTheme();

  const syncSwipers = (activeIndex) => {
    if (swiperRef1.current && swiperRef2.current) {
      swiperRef1.current.slideTo(activeIndex);
      swiperRef2.current.slideTo(activeIndex);
    }
  };

  return (
    <Wrapper style={{ background: backgroundColor }}>
      <SwiperSlider
        swiperRef={swiperRef1}
        onSlideChange={syncSwipers}
        collection={collection}
      />
      <SwiperPagination
        swiperRef={swiperRef2}
        onSlideChange={syncSwipers}
        bottomSwiper={bottomSwiper}
        collection={collection}
      />
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
  collection: PropTypes.array,
};
