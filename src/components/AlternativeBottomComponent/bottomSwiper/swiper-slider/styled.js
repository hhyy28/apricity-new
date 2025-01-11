import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { media } from '@components/bootstrap-grid';

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
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  flex-direction: column;
  position: relative;
  height: 100%;
  & .swiper-wrapper {
    display: flex;
  }

  .swiper-slide {
    height: 296px;

    ${media.sm`
      height: 388px;
    `}
    
    ${media.lg`
      height: 526px;
    `}
  }

  img {
    width: 100%;
    height: 100%;
  }
`;