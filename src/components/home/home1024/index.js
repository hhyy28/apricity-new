import React, { useRef } from 'react';
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
  FooterContainer
} from './styled';
import { orderButton } from '@svg/index';
import { gallery } from '@images/index';
import { PaginationButton } from '@svg/paginationButton';
import SwiperPagination from '@components/home/swiper-pagination';
import SwiperSlider from '@components/home/swiper-slider';

export default function Home1024({ homeMenu }) {
  const { refineOption, sortOption } = homeMenu;

  const swiperRef = useRef(null);

  return (
    <>
      <MenuContainer>
        {/* <GalleryBackground background={gallery}>
          <OrderContainer>
            <ProductName>COLLECTION : éCLAT. THE VASE</ProductName>
            <OrderButton>
              <Image src={orderButton} alt="order img" />
            </OrderButton>
          </OrderContainer>
        </GalleryBackground> */}
        <SwiperSlider swiperRef={swiperRef} />
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
        <SwiperPagination swiperInstance={swiperRef.current} />
      </FooterContainer>
    </>
  );
}
