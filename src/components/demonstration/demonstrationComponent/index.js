import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  FooterContainer,
  OrderButton,
  OrderContainer,
  SwiperContainer,
  SwiperStyled,
  Wrapper,
} from './styled';
import Image from 'next/image';
import { orderButton } from '@svg/index';
import SwiperPagination from './swiper-pagination';
import { SwiperSlide } from 'swiper/react';
import { background1 } from '@images/index';
import NextImage from '@components/images/next-image';

const images = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYzF5mP7DXvI9X2ZX2YG60GXpS-xVt510c9A&s', 'https://m.media-amazon.com/images/I/81BmxjMuvZL.__AC_SX300_SY300_QL70_FMwebp_.jpg'];

export default function DemonstrationComponent({ $isTriggered }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, []);

  return (
    <Wrapper $isTriggered={$isTriggered}>
      <SwiperStyled
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        effect={'fade'}
      >
        {images.map((image, index) => (
          <SwiperSlide key={`slide-${index}`}>
            <SwiperContainer>
              <NextImage src={image} fill/>
            </SwiperContainer>
          </SwiperSlide>
        ))}
        <FooterContainer $isTriggered={$isTriggered}>
          <OrderContainer>
            <OrderButton>
              <Image src={orderButton} alt="Order Now" />
            </OrderButton>
          </OrderContainer>
          <SwiperPagination swiperInstance={swiperRef.current} />
        </FooterContainer>
      </SwiperStyled>
    </Wrapper>
  );
}

DemonstrationComponent.propTypes = {
  $isTriggered: PropTypes.bool,
};
