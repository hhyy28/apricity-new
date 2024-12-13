import React, { useEffect, useRef } from 'react';
import {
  FooterContainer,
  OrderButton,
  OrderContainer,
  SwiperStyled,
} from './styled';
import Image from 'next/image';
import { orderButton } from '@svg/index';
import SwiperPagination from './swiper-pagination';
import { SwiperSlide } from 'swiper/react';
import { background1 } from '@images/index';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [background1, background1];

export default function DemonstrationComponent() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, []);

  return (
    <SwiperStyled
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      cssMode={true}
      effect={"fade"}
    >
      {images.map((image, index) => (
        <SwiperSlide key={`slide-${index}`}>
          <Image src={image} alt={`Slide ${index}`}/>
        </SwiperSlide>
      ))}
        <FooterContainer>
          <OrderContainer>
            <OrderButton>
              <Image src={orderButton} alt="Order Now" />
            </OrderButton>
          </OrderContainer>
          <SwiperPagination swiperInstance={swiperRef.current} />
        </FooterContainer>
      </SwiperStyled>
  );
}
