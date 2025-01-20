import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styled';
import SwiperPagination from './swiper-pagination';
import SwiperSlider from './swiper-slider';

export default function BottomSwiper({ bottomSwiper }) {
  const swiperRef1 = useRef(null);
  const swiperRef2 = useRef(null);

  const syncSwipers = (activeIndex) => {
    if (swiperRef1.current && swiperRef2.current) {
      swiperRef1.current.slideTo(activeIndex);
      swiperRef2.current.slideTo(activeIndex);
    }
  };

  return (
    <Wrapper>
      <SwiperSlider swiperRef={swiperRef1} onSlideChange={syncSwipers} />
      <SwiperPagination
        swiperRef={swiperRef2}
        onSlideChange={syncSwipers}
        bottomSwiper={bottomSwiper}
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
};
