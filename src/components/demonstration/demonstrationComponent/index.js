import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  FooterContainer,
  OrderButton,
  OrderContainer,
  SwiperStyled,
  Wrapper,
} from './styled';
import Image from 'next/image';
import { orderButton } from '@svg/index';
import SwiperPagination from './swiper-pagination';
import { SwiperSlide } from 'swiper/react';
import { background1 } from '@images/index';

const images = [background1, background1];

export default function DemonstrationComponent({ isAtScreenTop }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, []);

  return (
    <Wrapper isAtScreenTop={isAtScreenTop}>
      <SwiperStyled
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        effect={'fade'}
      >
        {images.map((image, index) => (
          <SwiperSlide key={`slide-${index}`}>
            <Image src={image} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
        <FooterContainer isAtScreenTop={isAtScreenTop}>
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
  isAtScreenTop: PropTypes.bool.isRequired,
};
