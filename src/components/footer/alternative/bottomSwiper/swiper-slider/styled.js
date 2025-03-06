import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { media } from '@components/bootstrap-grid';

export const SwiperWrapper = styled.div`
  position: relative;
  height: 66.37vh;

  ${media.sm`
    height: 56.03vh;
  `}

  ${media.md`
    height: 68.72vh;
  `}

  ${media.lg`
    height: 70.90vh;
  `}

  ${media.xl`
    height: 55.73vh;
    padding: 0 0 0 17.84vh;
  `}

  ${media.xxl`
    height: 65.93vh;
  `}
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  aspect-ratio: ${(props) => props.ratio};
  transition:
    height 1s ease,
    transform 1s ease;
  object-fit: cover;
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  align-self: flex-end;

  ${media.md`
    flex-direction: column-reverse;
    gap: 3.91vh;
  `}
`;

export const FooterContainer = styled.div`
  position: ${(props) => (props.$absolute ? 'absolute' : 'static')};
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding: 3.7vh 0 0;
  width: 100%;
  gap: 2.46vh;
  opacity: 0;
  transition: opacity 1s ease;

  ${media.sm`
    padding: 4.62vh 0 3.85vh 0;
  `}
  ${media.md`
    padding: 1.30vh 0 1.96vh 0;
    flex-direction: row;
    align-self: flex-end;
  `}
  ${media.lg`
    padding: 0.39vh 0.29vh 0.29vh 0.78vh;
  `}
  ${media.xl`
    background-color: rgba(255, 255, 255, 0.3);
    width: 248px;
    height: 38px;
    gap: 0;
    bottom: 7.16vh;
    right: 1.17vh;
  `}
`;

export const SwiperStyled = styled(Swiper)`
  overflow: hidden;
  width: 100%;
  height: 100%;
  .swiper-slide {
    overflow: hidden;
    transition:
      height 1s ease,
      padding 1s ease;

    &:not(.swiper-slide-active) {
      height: 36vh;
      padding: 9vh 0 0 0;

      ${media.sm`
        height: 26.15vh;
        padding: 8.97vh 0 0 0;
      `}

      ${media.md`
        height: 36.12vh;
        padding: 12.64vh 0 0 0;
      `}

      ${media.lg`
        height: 37.50vh;
        padding: 13.18vh 0 0 0;
      `}

      ${media.xl`
        height: 34.64vh;
        padding: 15.7vh 0 0 0;
      `}

      ${media.xxl`
        height: 38.43vh;
        padding: 22.31vh 0 0 0;
      `}  

      ${ImageWrapper} {
        transform: scale(1);
        transition: transform 1s ease;
      }

      ${FooterContainer} {
        opacity: 0;
        transition: opacity 1s ease;
      }
    }

    &.swiper-slide-active {
      height: 100%;

      ${ImageWrapper} {
        height: 100%;
        transform: scale(1);
      }

      ${FooterContainer} {
        opacity: 1;
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

  ${media.md`
    align-self: flex-end;
  `}
  ${media.lg`
    flex-direction: row;
  `}
`;

export const OrderButton = styled.button`
  position: relative;
  display: none;
  background: none;
  border: none;
  ${media.lg`
    display: flex;
  `}
`;

export const NotebookText = styled.div`
  font-family: 'Panel-Sans', sans-serif;
  display: none;
  font-size: 12px;
  color: #000000;
  margin: 0 2.64vh 0 0;
  letter-spacing: 1.2px;
  font-weight: 400;

  ${media.xl`
    display: none;
  `}
`;
