import React from 'react';
import Image from 'next/image';
import {
  MenuContainer,
  GalleryBackground,
  OrderContainer,
  ProductName,
  OrderButton,
  SideMenu,
  OptionMenu,
  Option,
  GallerySideImg,
  FooterContainer,
  PaginationContainer,
  PaginationButtonImg,
  PaginationButtonNumbers,
} from './styled';
import { orderButton } from '@svg/index';
import { gallery } from '@images/index';
import { PaginationButton } from '@svg/paginationButton';

export default function Home1024({ homeMenu }) {
  const { refineOption, sortOption } = homeMenu;

  return (
    <>
      <MenuContainer>
        <GalleryBackground background={gallery}>
          <OrderContainer>
            <ProductName>COLLECTION : éCLAT. THE VASE</ProductName>
            <OrderButton>
              <Image src={orderButton} alt="order img" />
            </OrderButton>
          </OrderContainer>
        </GalleryBackground>
        <SideMenu>
          <OptionMenu>
            <Option>{refineOption}</Option>
            <Option>{sortOption}</Option>
          </OptionMenu>
          <GallerySideImg>
            <Image src={gallery} alt="gallery img" />
          </GallerySideImg>
        </SideMenu>
      </MenuContainer>
      <FooterContainer>
        <PaginationContainer>
          <PaginationButtonImg>
            <PaginationButton fillcolor="#2B2726" />
          </PaginationButtonImg>
          <PaginationButtonNumbers>1</PaginationButtonNumbers>
          <PaginationButtonNumbers>12</PaginationButtonNumbers>
          <PaginationButtonImg rotate>
            <PaginationButton fillcolor="#2B2726" />
          </PaginationButtonImg>
        </PaginationContainer>
      </FooterContainer>
    </>
  );
}
