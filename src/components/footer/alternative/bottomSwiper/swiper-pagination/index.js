import React from 'react';
import PropTypes from 'prop-types';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  CollectionContainer,
  CollectionDef,
  CollectionName,
  ImageContainer,
  PaginationButtonNumbers,
  PaginationContainer,
  SideContainer,
  SwiperStyled,
  Wrapper,
} from './styled';
import NextImage from '@components/images/next-image';

export default function SwiperPagination({
  onSlideChange,
  swiperRef,
  bottomSwiper,
  collection,
}) {
  const { collectionLabel } = bottomSwiper;
  const firstCollection = collection?.[0];
  const { collectionName = '', collectionItems = [] } = firstCollection;
  const { images } = collectionItems?.[0];
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
            <ImageContainer>
              <NextImage
                src={`${image.src}.jpeg`}
                alt={`Slide ${index}`}
                fill
              />
            </ImageContainer>
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
  collection: PropTypes.array,
};
