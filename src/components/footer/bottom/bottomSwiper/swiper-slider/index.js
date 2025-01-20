import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { SwiperSlide } from 'swiper/react';
import { SwiperWrapper, SwiperStyled } from './styled';
import { gallery1, gallery2 } from '@images/index';
import Image from 'next/image';
import { useScreen } from '@context/ScreenContext';

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

export default function SwiperSlider({ swiperRef }) {
  const { isPhoneM, isPhoneL, isTabletVertical } = useScreen();

  const gapValue = () => {
    if (isTabletVertical) return 64;
    if (isPhoneL) return 46;
    if (isPhoneM) return 17;
    return 15;
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, [swiperRef]);

  return (
    <SwiperWrapper>
      <SwiperStyled
        slidesPerView="auto"
        spaceBetween={gapValue()}
        centeredSlides={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        cssMode={true}
        loop={true}
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
