import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import {
  SwiperWrapper,
  SwiperStyled,
  SlideContent,
  OrderContainer,
  OrderButton,
  ProductName,
  SlideImage,
} from './styled';
import { gallery1, gallery2 } from '@images/index';
import { orderButton } from '@svg/index';

const images = [
  { src: gallery1.src, link: '/', name: 'COLLECTION : éCLAT. THE VASE' },
  { src: gallery2.src, link: '/', name: 'COLLECTION : éCLAT. THE VASE' },
  { src: gallery2.src, link: '/', name: 'COLLECTION : éCLAT. THE VASE' },
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
            <Link href={image.link} passHref legacyBehavior>
              <SlideContent>
                <SlideImage src={image.src} alt={image.name} />
                <OrderContainer $isActive={activeIndex === index}>
                  <ProductName>{image.name}</ProductName>
                  <OrderButton>
                    <img src={orderButton.src} alt="Order button" />
                  </OrderButton>
                </OrderContainer>
              </SlideContent>
            </Link>
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
