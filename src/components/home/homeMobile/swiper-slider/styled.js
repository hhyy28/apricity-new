import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { media } from '@components/bootstrap-grid';

export const SwiperWrapper = styled.div`
  position: relative;
  height: calc(100vh - 133px); //// ATTENTION! NEEDS TO BE CHANGED
  padding: 80px 0 100px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  aspect-ratio: ${(props) => props.ratio};

  img {
    object-fit: cover;
  }
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const FooterContainer = styled.div`
  position: ${(props) => props.absolute ? 'absolute' : 'static'};
  bottom: 60px;
  right: 10px;
  width: 240px;
  height: 80px;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const SwiperStyled = styled(Swiper)`
  overflow: hidden;
  width: 100%;
  height: 100%;

  .swiper-slide {
    overflow: hidden;

    &.swiper-slide-active {
    }

    &:not(.swiper-slide-active) {
      padding: 90px 0 0;
      height: 60%;

      ${FooterContainer} {
        display: none;
      }
    }
  }
`;

export const SlideContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const OptionMenu = styled.div`
  position: absolute;
  top: 66px;
  right: 16%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  z-index: 2;
  gap: 10px;

  ${media.md`
    right: 110px;
  `}

  ${media.lg`
    top: 100px;
    right: 40px;
  `}

  ${media.xl`
    top: 20%;
    right: 8%;
  `}
`;

export const Option = styled.div`
  font-family: 'Panel-Sans', sans-serif;
  font-size: 11px;
  font-weight: 500;
  color: #cfd0cc;
  letter-spacing: 0.55px;

  ${media.lg`
    color: #000000;
  `}
`;

export const CollectionDef = styled.div`
  font-family: 'Panel-Sans', sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: #364251;
  letter-spacing: 1px;
`;

export const CollectionName = styled.p`
  font-family: 'Panel-Sans', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #364251;
  margin: 0;
`;

export const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  align-items: flex-end;
  letter-spacing: 1px;
  line-height: 18px;
`;

export const OrderButton = styled.button`
  background: none;
  border: none;
`;

export const NotebookText = styled.div`
  font-family: 'Panel-Sans', sans-serif;
  font-size: 12px;
  color: #000000;
  margin: 0 15px 0 0;
  letter-spacing: 1.2px;
  font-weight: 400;
`;
