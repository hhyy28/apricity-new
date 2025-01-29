import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useScreen } from '@context/screenContext';
import { orderButton } from '@svg/index';
import {
  OptionMenu,
  Option,
  CollectionDef,
  CollectionName,
  CollectionContainer,
  Wrapper,
  FooterContainer,
  FooterSubContainer,
  NotebookInfo,
  OrderButton,
} from './styled';
import SwiperPagination from './swiper-pagination';
import SwiperSlider from './swiper-slider';

export default function BottomSwiper({ bottomSwiper }) {
  const swiperRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const {
    refineOption,
    sortOption,
    collectionLabel,
    collectionName,
    notebookInfo,
  } = bottomSwiper;

  const { isPhoneL } = useScreen(null);

  useEffect(() => {
    if (swiperRef.current) {
      setSwiperInstance(swiperRef.current);
    }
  }, [swiperRef.current]);

  return (
    <Wrapper>
      {isPhoneL && (
        <OptionMenu>
          <Option>{refineOption}</Option>
          <Option>{sortOption}</Option>
        </OptionMenu>
      )}
      <SwiperSlider swiperRef={swiperRef} />
      {!isPhoneL && (
        <OptionMenu>
          <Option>{refineOption}</Option>
          <Option>{sortOption}</Option>
        </OptionMenu>
      )}
      <FooterContainer>
        <CollectionContainer>
          <CollectionDef>{collectionLabel}</CollectionDef>
          <CollectionName>{collectionName}</CollectionName>
        </CollectionContainer>
        <FooterSubContainer>
          <OrderButton>
            <Image src={orderButton} alt="imgSlide" />
          </OrderButton>
          <NotebookInfo>{notebookInfo}</NotebookInfo>
        </FooterSubContainer>
      </FooterContainer>
      {swiperInstance && <SwiperPagination swiperInstance={swiperInstance} />}
    </Wrapper>
  );
}

BottomSwiper.propTypes = {
  bottomSwiper: PropTypes.shape({
    refineOption: PropTypes.string.isRequired,
    sortOption: PropTypes.string.isRequired,
    collectionLabel: PropTypes.string.isRequired,
    collectionName: PropTypes.string.isRequired,
    notebookInfo: PropTypes.string.isRequired,
  }).isRequired,
};
