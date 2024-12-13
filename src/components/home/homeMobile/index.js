import React, { useRef } from 'react';
import {
  MenuContainer,
  FooterContainer,
  OptionMenu,
  Option,
  CollectionDef,
  CollectionName,
  CollectionContainer,
  OrderButton,
  OrderContainer,
  NotebookText,
} from './styled';
import Image from 'next/image';
import { orderButton } from '@svg/index';
import SwiperSlider from '@components/home/swiper-slider';
import SwiperPagination from '@components/home/swiper-pagination';
import PropTypes from 'prop-types';
export default function HomeMobile({ homeMenu }) {

  const swiperRef = useRef(null);

  const {
    refineOption,
    sortOption,
    collectionLabel,
    collectionName,
    notebookLabel,
  } = homeMenu;

  return (
    <>
      <MenuContainer>
        <OptionMenu>
          <Option>{refineOption}</Option>
          <Option>{sortOption}</Option>
        </OptionMenu>
        <SwiperSlider swiperRef={swiperRef} />
      </MenuContainer>
      <FooterContainer>
        <CollectionContainer>
          <CollectionDef>{collectionLabel}</CollectionDef>
          <CollectionName>{collectionName}</CollectionName>
        </CollectionContainer>
        <OrderContainer>
          <NotebookText>{notebookLabel}</NotebookText>
          <OrderButton>
            <Image src={orderButton} alt="Order Button" />
          </OrderButton>
        </OrderContainer>
        <SwiperPagination swiperInstance={swiperRef.current} />
      </FooterContainer>
    </>
  );
}

HomeMobile.propTypes = {
  homeMenu: PropTypes.shape({
    refineOption: PropTypes.string.isRequired,
    sortOption: PropTypes.string.isRequired,
    collectionLabel: PropTypes.string.isRequired,
    collectionName: PropTypes.string.isRequired,
    notebookLabel: PropTypes.string.isRequired,
  }).isRequired,
};