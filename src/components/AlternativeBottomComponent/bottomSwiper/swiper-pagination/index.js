import React from 'react';
import PropTypes from 'prop-types';
import {
  CollectionContainer,
  CollectionDef,
  PaginationButtonNumbers,
  PaginationContainer,
  SideContainer,
  SwiperStyled,
  Wrapper,
} from './styled';
import { useSwiperControls } from '@context/SwiperFunctions';
import { gallery1, gallery2 } from '@images/index';
import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';

const images = [gallery1, gallery2, gallery2, gallery2, gallery2, gallery2, gallery2, gallery2, gallery1];

export default function SwiperPagination({ swiperInstance }) {
  const { slideToFirst, slideToLast } = useSwiperControls(swiperInstance);

  return (
    <Wrapper>
      <SwiperStyled cssMode autoHeight={false}>
        {images.map((image, index) => (
          <SwiperSlide key={`slide-${index}`}>
            <Image src={image} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </SwiperStyled>
      <SideContainer>
        <CollectionContainer>
          <CollectionDef>COLLECTION   :   éCLAT.</CollectionDef>
        </CollectionContainer>
        <PaginationContainer>
          <PaginationButtonNumbers onClick={() => slideToFirst()}>1</PaginationButtonNumbers>
          <PaginationButtonNumbers onClick={() => slideToLast()}>12</PaginationButtonNumbers>
        </PaginationContainer>
      </SideContainer>
    </Wrapper>
  );
}

SwiperPagination.propTypes = {
  swiperInstance: PropTypes.object.isRequired,
};
