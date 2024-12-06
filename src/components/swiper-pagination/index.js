import React from "react"; 
import PropTypes from "prop-types"; 
import { PaginationButton } from "@svg/paginationButton";
import {
  PaginationButtonImg,
  PaginationButtonNumbers,
  PaginationContainer,
} from "./styled";

export default function SwiperPagination({ swiperInstance }) {
  const handlePrevClick = () => {
    if (swiperInstance?.slidePrev) {
      swiperInstance.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperInstance?.slideNext) {
      swiperInstance.slideNext();
    }
  };
  

  return (
    <PaginationContainer>
      <PaginationButtonImg onClick={handlePrevClick}>
        <PaginationButton fillcolor="#2B2726" />
      </PaginationButtonImg>
      <PaginationButtonNumbers>1</PaginationButtonNumbers>
      <PaginationButtonNumbers>12</PaginationButtonNumbers>
      <PaginationButtonImg rotate onClick={handleNextClick}>
        <PaginationButton fillcolor="#2B2726" />
      </PaginationButtonImg>
    </PaginationContainer>
  );
}

SwiperPagination.propTypes = {
  swiperInstance: PropTypes.shape({
    slidePrev: PropTypes.func,
    slideNext: PropTypes.func,
  }),
};
