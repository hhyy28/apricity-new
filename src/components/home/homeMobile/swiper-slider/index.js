import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { SwiperWrapper, SwiperStyled, ImageWrapper, SlideContainer, OptionMenu, Option, FooterContainer, CollectionContainer, CollectionDef, CollectionName, OrderContainer, NotebookText, OrderButton } from './styled';
import NextImage from '@components/images/next-image';
import { useScreen } from '@context/screenContext';
import Image from 'next/image';
import SwiperPagination from '../swiper-pagination';
import { orderButton } from '@svg/index'
export default function SwiperSlider({ homeMenu }) {
  const { 
    isPhoneM: phoneM, 
    isPhoneL: phoneL, 
    isTabletVertical: tabletVertical 
  } = useScreen();
  const screen = useScreen();
  console.log('SCREEN', screen);
  const swiperRef = useRef(null);

  const swiperOptions = {
    phoneM: {
      slidesPerView: 1.4,
      centeredSlides: true,
      spaceBetween: 17,
      ratio: 1/1.1,
    },
    phoneL: {
      slidesPerView: 1.5,
      centeredSlides: true,
      spaceBetween: 46,
      ratio: 1/1.1,
    },
    tabletVertical: {
      slidesPerView: 1.3,
      centeredSlides: false,
      spaceBetween: 64,
      ratio: 1.4/1,
    },
  };

  const {
    refineOption, sortOption, collectionLabel, collectionName, notebookLabel, images 
  } = homeMenu

  const gapValue = () => {
    return isTabletVertical ? 64 : isPhoneL ? 46 : isPhoneM ? 17 : 15;
  };

  const getSwiperOptions = () => {
    if (tabletVertical) return swiperOptions.tabletVertical;
    if (phoneL) return swiperOptions.phoneL;
    if (phoneM) return swiperOptions.phoneM;
    return swiperOptions.phoneM; // default fallback
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, []);

  const { slidesPerView, centeredSlides, spaceBetween, ratio } = getSwiperOptions();

  console.log(phoneM, phoneL, tabletVertical);
  console.log(getSwiperOptions());

  const InfoBlock = ({ absolute = false }) => {
    return (
      <FooterContainer absolute={absolute}>
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
      </FooterContainer>
    )
  };

  return (
    <SwiperWrapper>
      <OptionMenu>
        <Option>{refineOption}</Option>
        <Option>{sortOption}</Option>
      </OptionMenu>
      <SwiperStyled
        slidesPerView={slidesPerView}
        centeredSlides={centeredSlides}
        spaceBetween={spaceBetween}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        cssMode={true}
        loop={true}
      >
        {images.map((image, index) => (
          <SwiperSlide 
            key={`slide-${index}`}
          >
            <SlideContainer ratio={ratio}>
              <Link href={image.link || '#'} passHref legacyBehavior>
                <ImageWrapper ratio={ratio}>
                  <NextImage 
                    src={image.src} 
                    alt={`Slide ${index}`} 
                    sizes={{ mobile: 320, tabletPortrait: 768, tabletLandscape: 1024, desktop: 1920 }} 
                    fill 
                  />
                  {tabletVertical && <InfoBlock absolute={true} />}
                </ImageWrapper>
              </Link>
              {!tabletVertical && <InfoBlock />}
            </SlideContainer>
          </SwiperSlide>
        ))}
      </SwiperStyled>
      <SwiperPagination swiperInstance={swiperRef.current} />
    </SwiperWrapper>
  );
}

SwiperSlider.propTypes = {
  swiperRef: PropTypes.shape({
    current: PropTypes.object,
  }),
  homeMenu: PropTypes.shape({
    refineOption: PropTypes.string.isRequired,
    sortOption: PropTypes.string.isRequired,
    collectionLabel: PropTypes.string.isRequired,
    collectionName: PropTypes.string.isRequired,
    notebookLabel: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};
