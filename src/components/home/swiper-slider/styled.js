import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { media } from 'src/components/bootstrap-grid';

export const SwiperWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; 
  overflow: hidden;
  width: 100%;
  position: relative; 
`;

export const SwiperStyled = styled(Swiper)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  width: 100%;

  &.swiper-container {
    scroll-behavior: smooth;
  }

  & .swiper-wrapper {
    display: flex;
  }

  .swiper-slide {
    height: 204px; 
    padding: 63px 0 18px 0;
    flex-shrink: 0; 
    scroll-snap-align: center; 
    
    ${media.sm`
      padding: 70px 0 41px 0;
    `}
    ${media.md`
      height: 277px; 
      padding: 97px 0 53px 0;
    `}
    ${media.lg`
      height: 384px;
      padding: 135px 0 74px 0;
    `}

    &.swiper-slide-active {
      height: 285px; 
      width: 253px; 
      padding: 0;

      ${media.sm`
        height: 315px; 
        width: 280px; 
      `}
      ${media.md`
        height: 427px; 
        width: 379px;
      `}
      ${media.lg`
        width: 527px;
        height: 593px;
      `}
    }
    
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
