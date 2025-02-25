import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import {
  SwiperWrapper,
  SwiperStyled,
  ImageWrapper,
  SlideContainer,
  FooterContainer,
  CollectionContainer,
  CollectionDef,
  CollectionName,
  OrderContainer,
  NotebookText,
  OrderButton
} from './styled';
import NextImage from '@components/images/next-image';
import { useScreen } from '@context/screenContext';
import Image from 'next/image';
import { orderButton } from '@svg/index';

export default function SwiperSlider({ homeMenu, swiperRef }) {
  const { isPhoneM, isPhoneL, isTabletHorizontal, isPc } = useScreen();
  const { collectionLabel, collectionName, notebookLabel, images } = homeMenu;

  const swiperOptions = {
    phoneM: { slidesPerView: 1.4, centeredSlides: true, spaceBetween: 17, ratio: 1 / 1.1 },
    phoneL: { slidesPerView: 1.5, centeredSlides: true, spaceBetween: 46, ratio: 1 / 1.1 },
    tabletHorizontal: { slidesPerView: 1.3, centeredSlides: false, spaceBetween: 64, ratio: 1.4 / 1 },
    Pc: { slidesPerView: 2, centeredSlides: true, spaceBetween: 180, ratio: 1074 / 712 }
  };

  const getSwiperOptions = () => {
    if (isTabletHorizontal) return swiperOptions.tabletHorizontal;
    if (isPhoneL) return swiperOptions.phoneL;
    return swiperOptions.phoneM;
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, [isPhoneM, isPhoneL, isTabletHorizontal]);

  const { slidesPerView, centeredSlides, spaceBetween, ratio } = getSwiperOptions();
  
  const InfoBlock = ({ absolute = false }) => (
    <FooterContainer absolute={absolute}>
      <CollectionContainer>
        <CollectionDef>{collectionLabel}</CollectionDef>
        <CollectionName>{collectionName}</CollectionName>
      </CollectionContainer>
      <OrderContainer>
        <NotebookText>{notebookLabel}</NotebookText>
        <OrderButton>
          <Image src={orderButton} alt="Order Button" width={49} height={16} />
        </OrderButton>
      </OrderContainer>
    </FooterContainer>
  );
  
  return (
    <SwiperWrapper>
      <SwiperStyled
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={slidesPerView}
        centeredSlides={centeredSlides}
        spaceBetween={spaceBetween}
        initialSlide={0}
        cssMode
        loop
      >
        {images.map((image, index) => (
          <SwiperSlide key={`slide-${index}`}>
            <SlideContainer ratio={ratio}>
              <Link href={image.link || '#'} passHref legacyBehavior>
                <ImageWrapper ratio={ratio}>
                  <NextImage
                    src={image.src}
                    alt={`Slide ${index}`}
                    sizes={{ mobile: 320, tabletPortrait: 768, tabletLandscape: 1024, desktop: 1920 }}
                    fill
                  />
                  {isTabletHorizontal && <InfoBlock absolute />}
                </ImageWrapper>
              </Link>
              {!isTabletHorizontal && <InfoBlock />}
            </SlideContainer>
          </SwiperSlide>
        ))}
      </SwiperStyled>
    </SwiperWrapper>
  );
}

SwiperSlider.propTypes = {
  homeMenu: PropTypes.shape({
    collectionLabel: PropTypes.string.isRequired,
    collectionName: PropTypes.string.isRequired,
    notebookLabel: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        link: PropTypes.string
      })
    ).isRequired
  }).isRequired,
  swiperRef: PropTypes.shape({ current: PropTypes.object }).isRequired
};
