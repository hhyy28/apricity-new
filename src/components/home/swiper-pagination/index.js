import React from 'react';
import PropTypes from 'prop-types';
import { PaginationButton } from '@svg/paginationButton';
import {
  PaginationButtonImg,
  PaginationButtonNumbers,
  PaginationContainer,
} from './styled';
import { useSwiperControls } from '@context/SwiperFunctions';

export default function SwiperPagination({ swiperInstance }) {
  const { slidePrev, slideNext, slideToFirst, slideToLast } =
    useSwiperControls(swiperInstance);

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
