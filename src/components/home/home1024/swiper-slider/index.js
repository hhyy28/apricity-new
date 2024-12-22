import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SwiperSlide } from 'swiper/react';
import {
  SwiperWrapper,
  SwiperStyled,
  SlideContent,
  OrderContainer,
  OrderButton,
  ProductName,
} from './styled';
import { gallery1, gallery2 } from '@images/index';
import { orderButton } from '@svg/index';
import Image from 'next/image';

const images = [
  { src: gallery1.src },
  { src: gallery2.src },
  { src: gallery2.src },
];

export default function SwiperSlider({ swiperRef }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    setIsLastSlide(swiper.activeIndex === images.length - 1);
  };

  return (
    <SwiperWrapper className={isLastSlide ? 'last-slide-active' : ''}>
      <SwiperStyled
        slidesPerView="auto"
        spaceBetween={53}
        centeredSlides={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
        cssMode={true}
        initialSlide={0}
      >
        {images.map((image, index) => (
          <SwiperSlide key={`slide-${index}`}>
            <SlideContent style={{ backgroundImage: `url(${image.src})` }}>
              <OrderContainer isActive={activeIndex === index}>
                <ProductName>COLLECTION : éCLAT. THE VASE</ProductName>
                <OrderButton>
                  <Image src={orderButton} alt="order img" />
                </OrderButton>
              </OrderContainer>
            </SlideContent>
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
