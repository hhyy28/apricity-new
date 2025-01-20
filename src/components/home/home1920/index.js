import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import {
  MenuContainer,
  PaginationButtonImg,
  GalleryBackground,
  OrderContainer,
  ProductName,
  OrderButton,
  SideMenu,
  OptionMenu,
  Option,
  GallerySideImg,
} from './styled';
import { orderButton } from '@svg/index';
import { gallery1 } from '@images/index';
import { PaginationButton } from '@svg/paginationButton';

export default function Home1920({ homeMenu }) {
  const { refineOption, sortOption } = homeMenu;

  return (
    <MenuContainer>
      <PaginationButtonImg>
        <PaginationButton fillcolor="#2B2726" />
      </PaginationButtonImg>
      <GalleryBackground $background={gallery1}>
        <OrderContainer>
          <ProductName>COLLECTION : éCLAT. THE VASE</ProductName>
          <OrderButton>
            <Image src={orderButton} alt="order img" />
          </OrderButton>
        </OrderContainer>
      </GalleryBackground>
      <PaginationButtonImg $rotate="true">
        <PaginationButton fillcolor="#2B2726" />
      </PaginationButtonImg>
      <SideMenu>
        <OptionMenu>
          <Option>{refineOption}</Option>
          <Option>{sortOption}</Option>
        </OptionMenu>
        <GallerySideImg>
          <Image src={gallery1} alt="gallery img" />
        </GallerySideImg>
      </SideMenu>
    </MenuContainer>
  );
}

Home1920.propTypes = {
  homeMenu: PropTypes.shape({
    refineOption: PropTypes.string,
    sortOption: PropTypes.string,
  }).isRequired,
};
