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
import NextImage from '@components/images/next-image';

const images = [
  'https://i.imgur.com/jMyEpUH.jpeg',
  'https://i.imgur.com/avga14y.jpeg',
];

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
              <NextImage src={image} fill />
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
