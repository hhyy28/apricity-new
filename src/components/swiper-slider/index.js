import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SwiperWrapper, SwiperStyled } from './styled';
import { gallery1, gallery2 } from '@images/index';
import Image from 'next/image';

const images = [gallery1, gallery2, gallery2, gallery2, gallery2, gallery2, gallery2, gallery2, gallery1];

export default function SwiperSlider({ swiperRef }) {
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, [swiperRef]);

  return (
    <SwiperWrapper>
      <SwiperStyled
        slidesPerView={1.25}
        spaceBetween={15}
        centeredSlides={true}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
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
};
