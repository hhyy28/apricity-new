import React from 'react';
import PropTypes from 'prop-types';
import { PaginationButton } from '@svg/paginationButton';
import {
  PaginationButtonImg,
  PaginationButtonNumbers,
  PaginationContainer,
} from './styled';

export default function SwiperPagination({ swiperInstance }) {
  const slidePrev = () => swiperInstance?.slidePrev();
  const slideNext = () => swiperInstance?.slideNext();
  const slideToFirst = () => swiperInstance?.slideTo(0);
  const slideToLast = () =>
    swiperInstance?.slideTo(swiperInstance.slides.length - 1);

  return (
    <PaginationContainer>
      <PaginationButtonImg onClick={slidePrev}>
        <PaginationButton fillcolor="#2B2726" />
      </PaginationButtonImg>
      <PaginationButtonNumbers onClick={slideToFirst}>
        1
      </PaginationButtonNumbers>
      <PaginationButtonNumbers onClick={slideToLast}>
        12
      </PaginationButtonNumbers>
      <PaginationButtonImg $rotate onClick={slideNext}>
        <PaginationButton fillcolor="#2B2726" />
      </PaginationButtonImg>
    </PaginationContainer>
  );
}

SwiperPagination.propTypes = {
  swiperInstance: PropTypes.shape({
    slidePrev: PropTypes.func,
    slideNext: PropTypes.func,
    slideTo: PropTypes.func,
    slides: PropTypes.array,
  }),
};
