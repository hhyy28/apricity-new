import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const SwiperWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  width: 100%;
  position: relative;
  padding: 0 0 40px;

  &.last-slide-active {
    margin-right: 233px;
  }

  &.last-slide-active .swiper-slide-prev {
    opacity: 0;
    transform: translateX(-100%);
    pointer-events: none;
  }
`;

export const SwiperStyled = styled(Swiper)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1); /* Smoother animation */
  overflow: hidden;
  width: 100%;

  &.swiper-container {
    scroll-behavior: smooth;
  }

  & .swiper-wrapper {
    display: flex;
  }

  .swiper-slide {
    height: 266px;
    padding: 121px 0 18px 0;
    flex-shrink: 0;
    scroll-snap-align: start;

    &.swiper-slide-active {
      width: 601px;
      height: 428px;
      padding: 0;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const SlideContent = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0 9px 55px;
  scroll-behavior: unset;
`;

export const OrderContainer = styled.div`
  display: ${(props) => (props.$isActive ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  background: #f2f3ef4d;
  padding: 4px 11px 3px 0px;
  width: 248px;
  height: 38px;
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.$isActive ? 1 : 0)};
`;

export const OrderButton = styled.button`
  flex-shrink: 0;
  height: 16px;
  width: 55px;
  background: none;
  border: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductName = styled.div`
  color: #0e0d0c;
  font-family: 'Panel-Sans';
  font-size: 13px;
  letter-spacing: 0.387px;
`;
