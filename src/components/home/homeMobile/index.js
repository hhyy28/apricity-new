import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { orderButton } from '@svg/index';
import SwiperPagination from '@components/home/swiper-pagination';
import SwiperSlider from '@components/home/swiper-slider';
import {
  CollectionContainer,
  CollectionDef,
  CollectionName,
  FooterContainer,
  MenuContainer,
  NotebookText,
  Option,
  OptionMenu,
  OrderButton,
  OrderContainer,
} from './styled';


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
