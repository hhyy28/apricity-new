import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { gallery1, gallery2 } from '@images/index';
import {
  CollectionContainer,
  CollectionDef,
  CollectionName,
  PaginationButtonNumbers,
  PaginationContainer,
  SideContainer,
  SwiperStyled,
  Wrapper,
} from './styled';

const images = [
  gallery1,
  gallery2,
  gallery2,
  gallery2,
  gallery2,
  gallery2,
  gallery2,
  gallery2,
  gallery1,
];

export default function SwiperPagination({
  onSlideChange,
  swiperRef,
  bottomSwiper,
}) {
  const { collectionLabel, collectionName } = bottomSwiper;

  return (
    <Wrapper>
      <SwiperStyled
        cssMode
        autoHeight={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => onSlideChange(swiper.activeIndex)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={`slide-${index}`}>
            <Image src={image} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </SwiperStyled>
      <SideContainer>
        <CollectionContainer>
          <CollectionDef>{collectionLabel}</CollectionDef>
          <CollectionName>{collectionName}</CollectionName>
        </CollectionContainer>
        <PaginationContainer>
          <PaginationButtonNumbers onClick={() => swiperRef.current.slideTo(0)}>
            1
          </PaginationButtonNumbers>
          <PaginationButtonNumbers
            onClick={() => swiperRef.current.slideTo(images.length - 1)}
          >
            {images.length}
          </PaginationButtonNumbers>
        </PaginationContainer>
      </SideContainer>
    </Wrapper>
  );
}

SwiperPagination.propTypes = {
  swiperRef: PropTypes.shape({
    current: PropTypes.object,
  }).isRequired,
  onSlideChange: PropTypes.func.isRequired,
  bottomSwiper: PropTypes.shape({
    collectionLabel: PropTypes.string.isRequired,
    collectionName: PropTypes.string.isRequired,
  }).isRequired,
};
