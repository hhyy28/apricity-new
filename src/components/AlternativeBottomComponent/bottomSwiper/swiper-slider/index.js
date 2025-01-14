import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import { gallery1, gallery2 } from '@images/index';
import { SwiperWrapper, SwiperStyled } from './styled';


const images = [
  gallery1,
  gallery2,
  gallery2,
  gallery2,
  gallery2,
  gallery2,
  gallery2,
  gallery2,
  gallery1,
];

export default function SwiperSlider({ swiperRef, onSlideChange }) {
  return (
    <SwiperWrapper>
      <SwiperStyled
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => onSlideChange(swiper.activeIndex)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={`slide-${index}`}>
            <Image src={image} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </SwiperStyled>
    </SwiperWrapper>
  );
}

SwiperSlider.propTypes = {
  swiperRef: PropTypes.shape({
    current: PropTypes.object,
  }).isRequired,
  onSlideChange: PropTypes.func.isRequired,
};
