import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { media } from '@components/bootstrap-grid';

export const SwiperWrapper = styled.div`
  position: relative;
  height: calc((365/568) *100vh); 
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
  padding: 21px;
  ${media.xl`
    background-color: rgba(255, 255, 255, 0.3);
  `}
`;

export const SwiperStyled = styled(Swiper)`
  overflow: hidden;
  width: 100%;
  height: 100%;
  
  .swiper-slide {
    overflow: hidden;
    height: 100%;
    &:not(.swiper-slide-active) {
      padding: 5vh  0 20vh 0 ;
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
