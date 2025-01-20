import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { media } from '@components/bootstrap-grid';

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
    height: 568px;
    ${media.sm`
      height: 780px;
    `}

    ${media.md`
      height: 767px;
    `}

    ${media.lg`
      height: 1024px;
    `}

    ${media.xl`
      height: 100%;
      width: 50%;
    `}

    ${media.xxl`
      height: 1080px;
    `}
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const OrderButton = styled.button`
  background: transparent;
  width: 55px;
  height: 16px;
  border: none;
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 53px 41px;

  ${media.sm`
    padding: 41px 56px;
  `}

  ${media.md`
    padding: 68px 48px;
  `}

  ${media.lg`
    display: none;
  `}
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 18px 0;
  z-index: 10;
  position: absolute;
  bottom: 0;
  width: 100%;
  ${media.sm`
    padding: 0  0 54px 0;
  `}

  ${media.md`
    padding: 0  0 86px 0;
  `}

  ${media.lg`
    padding: 0  0 18px 0;
  `}

  ${media.lg`
    padding: 0  0 18px 0;
    display: ${({ isAtScreenTop }) => (isAtScreenTop ? 'flex' : 'none')};
  `}
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #d7d7d1;

  ${media.xl`
    width: 50%;
    padding: ${({ isAtScreenTop }) => (isAtScreenTop ? '0' : '252px 113px')};
  `}
`;
