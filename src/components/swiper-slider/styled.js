import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const SwiperWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; 
  overflow: hidden;
`;

export const SwiperStyled = styled(Swiper)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  .swiper-slide {
    height: 204px; 
    width: 253px;
    padding: 63px 0 18px 0;

    &.swiper-slide-active {
      height: 285px; 
      width: 253px;
      padding: 0;
    }
    
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`;
