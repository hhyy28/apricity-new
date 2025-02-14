import React, { useRef } from 'react';
import {
  MenuContainer,
  PaginationButtonImg,
  PaginationButtonImgRotated,
} from './styled';
import { PaginationButton } from '@svg/paginationButton';
import SwiperSlider from './swiper-slider';

export default function Home1920() {
  const swiperRef = useRef();
  const slidePrev = () => swiperRef.current?.slidePrev();
  const slideNext = () => swiperRef.current?.slideNext();

  return (
    <MenuContainer>
      <PaginationButtonImg onClick={slidePrev}>
        <PaginationButton fillcolor="#2B2726" />
      </PaginationButtonImg>
      <SwiperSlider swiperRef={swiperRef} />
      <PaginationButtonImgRotated $rotate onClick={slideNext}>
        <PaginationButton fillcolor="#2B2726" />
      </PaginationButtonImgRotated>
    </MenuContainer>
  );
}
