import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { useTheme } from '@context/themeContext';
import { useScreen } from '@context/screenContext';
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
  OrderButton,
} from './styled';
import NextImage from '@components/images/next-image';
import Image from 'next/image';
import { orderButton } from '@svg/index';

export default function SwiperSlider({ homeMenu, collection, swiperRef }) {
  const { setBackgroundColor } = useTheme();
  const { isPhoneM, isPhoneL, isTabletHorizontal, isTabletVertical, isPc } =
    useScreen();
  const { collectionLabel } = homeMenu;
  const firstCollection = collection?.[0] || {};
  const { collectionName = '', collectionItems = [] } = firstCollection;

  const swiperOptions = {
    phoneS: {
      slidesPerView: 1.25,
      centeredSlides: true,
      spaceBetween: 15,
      ratio: 253 / 285,
    },
    phoneM: {
      slidesPerView: 1.25,
      centeredSlides: true,
      spaceBetween: 17,
      ratio: 280 / 315,
    },
    phoneL: {
      slidesPerView: 1.4,
      centeredSlides: true,
      spaceBetween: 46,
      ratio: 379 / 427,
    },
    tabletVertical: {
      slidesPerView: 1.4,
      centeredSlides: true,
      spaceBetween: 64,
      ratio: 527 / 593,
    },
    tabletHorizontal: {
      slidesPerView: 1.3,
      centeredSlides: false,
      spaceBetween: 53,
      ratio: 1.4 / 1,
    },
    Pc: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 180,
      ratio: 1074 / 712,
    },
  };

  const getSwiperOptions = () => {
    if (isPc) return swiperOptions.Pc;
    if (isTabletHorizontal) return swiperOptions.tabletHorizontal;
    if (isTabletVertical) return swiperOptions.tabletVertical;
    if (isPhoneL) return swiperOptions.phoneL;
    if (isPhoneM) return swiperOptions.phoneM;
    return swiperOptions.phoneS;
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, [isPhoneM, isPhoneL, isTabletHorizontal]);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current;

      const updateBackground = () => {
        const activeIndex = swiper.realIndex;
        const allImages = collectionItems.flatMap((item) => item.images);
        const activeImage =
          allImages[activeIndex]?.backgroundColor || '#857c61';
        setBackgroundColor(activeImage);
      };

      swiper.on('slideChange', updateBackground);
      updateBackground();

      return () => {
        swiper.off('slideChange', updateBackground);
      };
    }
  }, [collectionItems, swiperRef, setBackgroundColor]);

  const { slidesPerView, centeredSlides, spaceBetween, ratio } =
    getSwiperOptions();

  const InfoBlock = ({ $absolute = false }) => (
    <FooterContainer $absolute={$absolute}>
      <CollectionContainer>
        <CollectionDef>{collectionLabel}</CollectionDef>
        <CollectionName>{collectionName}</CollectionName>
      </CollectionContainer>
      <OrderContainer>
        <NotebookText>{collectionItems[0]?.name || ''}</NotebookText>
        <OrderButton>
          <Image src={orderButton} alt="Order Button" width={49} height={16} />
        </OrderButton>
      </OrderContainer>
    </FooterContainer>
  );

  InfoBlock.propTypes = {
    $absolute: PropTypes.bool,
  };

  return (
    <SwiperWrapper>
      <SwiperStyled
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={slidesPerView}
        centeredSlides={centeredSlides}
        spaceBetween={spaceBetween}
        cssMode
      >
        {collectionItems
          .flatMap((item) => item.images)
          .map((image, index) => (
            <SwiperSlide key={index}>
              <SlideContainer ratio={ratio}>
                <Link href={image.link || '#'} passHref legacyBehavior>
                  <ImageWrapper ratio={ratio}>
                    <NextImage
                      src={`${image.src}.jpeg`}
                      alt={`Slide ${index}`}
                      sizes={{
                        mobile: 320,
                        tabletPortrait: 768,
                        tabletLandscape: 1024,
                        desktop: 1920,
                      }}
                      fill
                    />
                    {isTabletHorizontal && <InfoBlock $absolute />}
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
    notebookLabel: PropTypes.string.isRequired,
  }).isRequired,
  collection: PropTypes.arrayOf(
    PropTypes.shape({
      collectionName: PropTypes.string.isRequired,
      collectionItems: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
          images: PropTypes.arrayOf(
            PropTypes.shape({
              src: PropTypes.string.isRequired,
              link: PropTypes.string,
              backgroundColor: PropTypes.string,
            })
          ).isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  swiperRef: PropTypes.shape({ current: PropTypes.object }).isRequired,
};
