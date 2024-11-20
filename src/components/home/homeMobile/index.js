import React from 'react';
import {
  MenuContainer,
  FooterContainer,
  OptionMenu,
  Option,
  CollectionDef,
  CollectionName,
  CollectionContainer,
  GalleryContainer,
  GalleryImg,
  GallerySideImg,
  OrderButton,
  PaginationContainer,
  PaginationButtonImg,
  OrderContainer,
  NotebookText,
  PaginationButtonNumbers,
} from './styled';
import Image from 'next/image';
import { orderButton } from '@svg/index';
import { gallery } from '@images/index';
import { useScreen } from '@context/ScreenContext';
import { PaginationButton } from '@svg/paginationButton';

export default function HomeMobile({ homeMenu }) {
  const { isPhoneL } = useScreen();

  const {
    refineOption,
    sortOption,
    collectionLabel,
    collectionName,
    notebookLabel,
  } = homeMenu;

  const paginationButtonSrc = isPhoneL ? '#2B2726' : '#DFDDD8';

  return (
    <>
      <MenuContainer>
        <OptionMenu>
          <Option>{refineOption}</Option>
          <Option>{sortOption}</Option>
        </OptionMenu>
        <GalleryContainer>
          <GallerySideImg>
            <Image src={gallery} alt="Gallery Image" />
          </GallerySideImg>
          <GalleryImg>
            <Image src={gallery} alt="Gallery Image" />
          </GalleryImg>
          <GallerySideImg>
            <Image src={gallery} alt="Gallery Image" />
          </GallerySideImg>
        </GalleryContainer>
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
        <PaginationContainer>
          <PaginationButtonImg>
            <PaginationButton fillcolor="#2B2726" />
          </PaginationButtonImg>
          <PaginationButtonNumbers>1</PaginationButtonNumbers>
          <PaginationButtonNumbers>12</PaginationButtonNumbers>
          <PaginationButtonImg rotate>
            <PaginationButton fillcolor={paginationButtonSrc} />
          </PaginationButtonImg>
        </PaginationContainer>
      </FooterContainer>
    </>
  );
}
