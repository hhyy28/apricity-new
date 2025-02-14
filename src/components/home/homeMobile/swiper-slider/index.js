import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { SwiperWrapper, SwiperStyled, ImageWrapper, MenuContainer, OptionMenu, Option, FooterContainer, CollectionContainer, CollectionDef, CollectionName, OrderContainer, NotebookText, OrderButton } from './styled';
import NextImage from '@components/images/next-image';
import { useScreen } from '@context/screenContext';
import Image from 'next/image';
import SwiperPagination from '../swiper-pagination';
import { orderButton } from '@svg/index'
export default function SwiperSlider({ homeMenu }) {
  const { isPhoneM, isPhoneL, isTabletVertical } = useScreen();
  const swiperRef = useRef(null);

const {
  refineOption, sortOption, collectionLabel, collectionName, notebookLabel, images 
} = homeMenu

  const gapValue = () => {
    if (isTabletVertical) return 64;
    if (isPhoneL) return 46;
    if (isPhoneM) return 17;
    return 15;
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, []);

  return (
    <SwiperWrapper>
      <SwiperStyled
        slidesPerView={1}
        spaceBetween={gapValue()}
        centeredSlides={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        cssMode={true}
        loop={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={`slide-${index}`}>
            <MenuContainer>
              <OptionMenu>
                <Option>{refineOption}</Option>
                <Option>{sortOption}</Option>
              </OptionMenu>
              <Link href={image.link || '#'} passHref legacyBehavior>
                <ImageWrapper>
                  <NextImage src={image.src} alt={`Slide ${index}`} sizes={{ mobile: 320, tabletPortrait: 768, tabletLandscape: 1024, desktop: 1920 }} fill />
                </ImageWrapper>
              </Link>
            </MenuContainer>
            <FooterContainer>
              <CollectionContainer>
                <CollectionDef>{collectionLabel}</CollectionDef>
                <CollectionName>{collectionName}</CollectionName>
              </CollectionContainer>
              <OrderContainer>
                <NotebookText>{notebookLabel}</NotebookText>
                <OrderButton>
                  <Image src={orderButton} alt="Order Button" width={40} height={40} />
                </OrderButton>
              </OrderContainer>
              <SwiperPagination swiperInstance={swiperRef.current} />
            </FooterContainer>
          </SwiperSlide>
        ))}
      </SwiperStyled>
    </SwiperWrapper>
  );
}

SwiperSlider.propTypes = {
  swiperRef: PropTypes.shape({
    current: PropTypes.object,
  }),
};
