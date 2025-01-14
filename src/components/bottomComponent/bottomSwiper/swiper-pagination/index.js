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
        <PaginationButton fillcolor="#DFDDD8" />
      </PaginationButtonImg>
      <PaginationButtonNumbers onClick={() => slideToFirst()}>
        1
      </PaginationButtonNumbers>
      <PaginationButtonNumbers onClick={() => slideToLast()}>
        {swiperInstance?.slides?.length || 0}
      </PaginationButtonNumbers>
      <PaginationButtonImg rotate onClick={slideNext}>
        <PaginationButton fillcolor="#DFDDD8" />
      </PaginationButtonImg>
    </PaginationContainer>
  );
}

SwiperPagination.propTypes = {
  swiperInstance: PropTypes.object.isRequired,
};
