import styled from 'styled-components';
import { media } from '@components/bootstrap-grid';

export const Wrapper = styled.div`
  background: #f2f3ef;
  display: flex;
  flex-direction: column;
  padding: 11.27vh 0 13.91vh;

  ${media.sm`
    padding: 25.13vh 0 40.64vh;
  `}

  ${media.md`
    padding: 20.2vh 0 33.64vh;
  `}
  
  ${media.lg`
    padding: 25vh 0 32.81vh;
  `}
  
  ${media.xl`
    flex-direction: row;
    padding: 25.91vh 0 19.27vh;
  `}
  
  ${media.xxl`
    flex-direction: row;
    padding: 22.69vh 0 19.07vh;
  `}
`;

export const ImageSubContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding: 0 9.33vh;
  height: 53.87vh;

  ${media.sm`
    padding: 0 7.69vh;
    height: 44.23vh;
  `}

  ${media.md`
    padding: 0 19.42vh 0 18.52vh;
    height: 51.26vh;
  `}
  
  ${media.lg`
    padding: 0 19.24vh;
    height: 52vh;
  `}
  
  ${media.xl`
    padding: 0 12.5vh 0 12.5vh;
    width: 50%;
    height: 54.82vh;
  `}
  
  ${media.xxl`
    padding: 0 14.63vh 0 27.96vh;
    height: 58.24vh;
  `}
`;

export const InfoWrapper = styled.div`
  ${media.xl`
    width: 50%;
    height: 100%;
  `}
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 9.33vh 8.8vh 0 7.92vh;

  ${media.sm`
    padding: 9.62vh 6.92vh 0 6.79vh;
  `}

  ${media.md`
    padding: 11.47vh 10.95vh 0;
  `}
  
  ${media.lg`
    padding: 8.89vh 17.97vh 0 18.07vh;
  `}
  
  ${media.xl`
    padding: 0 26.3vh 0 3.91vh;
  `}
  
  ${media.xxl`
    padding: 10.94vh 19.17vh 0 19.26vh;
  `}
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6.69vh 7.04vh 0;
  gap: 2.82vh;

  ${media.sm`
    padding: 4.23vh 7.69vh 0;
    gap: 2.31vh;
  `}

  ${media.md`
    padding: 27.51vh 12.52vh 0 10.95vh;
    gap: 2.61vh;
  `}
  
  ${media.lg`
    padding: 39.45vh 18.55vh 0;
  `}
  
  ${media.xl`
    padding: 4.3vh 7.16vh 0;
  `}
  
  ${media.xxl`
    padding: 2.04vh 19.26vh 0;
    gap: 2.96vh;
  `}
`;

export const CollectionText = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #191919;
  font-family: 'Panel-Sans';
  letter-spacing: 0.6px;
  line-height: 18px;
  text-align: justify;

  ${media.xxl`
    font-size: 13px;
  `}
`;

export const LogoWrapper = styled.div`
  display: flex;
`;

export const LogoSubWrapperImg = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const LogoWrapperImg = styled.div`
  width: 22.18vh;
  height: 3.17vh;

  ${media.sm`
    width: 18.21vh;
    height: 2.56vh;
  `}

  ${media.md`
    width: 29.07vh;
    height: 4.17vh;
  `}
  
  ${media.xl`
    width: 20.34vh;
    height: 2.99vh;
  `}

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const TitleText = styled.span`
  color: #191919;
  font-family: 'Panel-Sans';
  font-size: 13px;
  padding: 0 0 0 1.94vh;

  ${media.sm`
    padding: 0 0 0 1.54vh;
  `}

  ${media.md`
    font-size: 3vh;
    padding: 0 0 0 2.61vh;
  `}
  
  ${media.xl`
    margin-top: 0.78vh;
    font-size: 14px;
    padding: 0 0 0 2.86vh;
  `}
  
  ${media.xxl`
    padding: 0 0 0 2.5vh;
  `}
`;

export const ItalicText = styled.span`
  font-style: italic;
  font-family: 'Panel-Sans';
`;

export const Cart = styled.div`
  height: 2.82vh;

  ${media.sm`
    height: 2.31vh;
  `}

  ${media.md`
    height: 3.13vh;
  `}
  
  ${media.xxl`
    height: 2.78vh;
  `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
