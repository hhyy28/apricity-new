import React, { useState } from 'react';
import PropTypes from 'prop-types'; 
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SwiperWrapper, SwiperStyled, Slide } from './styled';
import { gallery1, gallery2 } from '@images/index';
import Image from 'next/image';

const images = [gallery1, gallery2, gallery1];

export default function SwiperSlider({ swiperRef }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SwiperWrapper>
      <SwiperStyled
        slidesPerView={2.5}
        centeredSlides={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Slide isActive={index === activeIndex}>
              <Image src={image} alt={`Slide ${index}`} />
            </Slide>
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
