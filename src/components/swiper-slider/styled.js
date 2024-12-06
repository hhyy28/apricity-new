import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { media } from 'src/components/bootstrap-grid';

export const SwiperWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  gap: 15px;
`;

export const SwiperStyled = styled(Swiper)`
  width: 100%;
  height: 100%;
  overflow: visible;

  .swiper-slide {
    width: auto !important;
    height: auto !important;
    padding-left: 15px;
  }

  .swiper-wrapper {
    display: flex;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .swiper-slide:first-child {
    margin-left: 35px;
  }
`;

export const SwiperSlideStyled = styled(SwiperSlide)``;

export const Slide = styled.div`
  height: ${({ isActive }) => (isActive ? '285px' : '204px')};
  width: ${({ isActive }) => (isActive ? '253px' : '125px')};
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.sm`
    height: ${({ isActive }) => (isActive ? '285px' : '50px')};
    width: ${({ isActive }) => (isActive ? '253px' : '50px')};
  `}

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
