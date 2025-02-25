import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { media } from '@components/bootstrap-grid';

export const SwiperWrapper = styled.div`
  position: relative;
  height: calc((365/568) * 100vh);

  ${media.sm`
    height: calc((437/780) * 100vh);
  `}

  ${media.md`
    height: calc((510/767) * 100vh);
  `}

  ${media.lg`
    height: calc((725/1024) * 100vh);
  `}

  ${media.xl`
    height: calc((428/768) * 100vh);
  `}

  ${media.xl`
    height: calc((712/1080) * 100vh);
  `}

`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
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
  bottom: 10.56vh;
  right: 1.76vh;
  display: flex;
  flex-direction: column;
  padding: 3.70vh 0 0 0;
  height: 12.7vh;
  ${media.sm`
    padding: 4.62vh 0 3.85vh 0;
  `}
  ${media.md`
    padding: 1.30vh 0 1.96vh 0;
  `}
  ${media.lg`
    padding: 4px 3px 3px 8px;
    bottom: 55px;
    right: 9px;
  `}
  ${media.xl`
    background-color: rgba(255, 255, 255, 0.3);
  `}
`;

export const SwiperStyled = styled(Swiper)`
  overflow: hidden;
  width: 100%;
  height: 100%;
  
  .swiper-wrapper {
    padding: 0 0 0 382px;
  }
  .swiper-slide {
    overflow: hidden;
    height: 100%;
    &:not(.swiper-slide-active) {
      padding: 9vh 0 0 0;
      height: 30vh;
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
  ${media.xl`
    align-items: flex-start;
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
  ${media.lg`
    flex-direction: row;
  `}
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
  ${media.xl`
    display: none;
  `}
`;
