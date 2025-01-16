import styled from 'styled-components';
import { media } from '@components/bootstrap-grid';

export const Wrapper = styled.div`
  background: #f2f3ef;
  display: flex;
  flex-direction: column;
  padding: 64px 0 79px;

  ${media.sm`
    padding: 196px 0 317px;
  `}

  ${media.md`
    padding: 155px 0 258px;
  `}
  
  ${media.lg`
    padding: 256px 0 336px;
  `}
  
  ${media.xl`
    flex-direction: row;
    padding: 199px 0 148px;
  `}
  
  ${media.xxl`
    flex-direction: row;
    padding: 245px 0 206px;
  `}
`;

export const ImageContainer = styled.div`
  padding: 0 53px;

  ${media.sm`
    padding: 0 60px;
  `}

  ${media.md`
    padding: 0 149px 0 142px;
  `}
  
  ${media.lg`
    padding: 0 197px;
  `}
  
  ${media.xl`
    padding: 0 95px 0 96px;
    width: 50%;
    height: 421px;
  `}
  
  ${media.xxl`
    padding: 0 158px 0 302px;
    height: 629px;
  `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
  padding: 53px 50px 0 45px;

  ${media.sm`
    padding: 75px 54px 0 53px;
  `}

  ${media.md`
    padding: 88px 84px 0;
  `}
  
  ${media.lg`
    padding: 91px 184px 0 185px;
  `}
  
  ${media.xl`
    padding: 0 202px 0 30px;
  `}
  
  ${media.xxl`
    padding: 84px 207px 0 208px;
  `}
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 38px 40px 0;
  gap: 16px;

  ${media.sm`
    padding: 33px 60px 0;
    gap: 18px;
  `}

  ${media.md`
    padding: 211px 96px 0 84px;
    gap: 20px;
  `}
  
  ${media.lg`
    padding: 404px 190px 0;
  `}
  
  ${media.xl`
    padding: 33px 55px 0;
  `}
  
  ${media.xxl`
    padding: 22px 208px 0;
    gap: 32px;
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

export const LogoWrapperImg = styled.div`
  width: 126px;
  height: 18px;

  ${media.sm`
    width: 142px;
    height: 20px;
  `}

  ${media.md`
    width: 223px;
    height: 32px;
  `}
  
  ${media.xl`
    width: 162px;
    height: 23px;
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
  padding: 0 0 0 11px;

  ${media.sm`
    padding: 0 0 0 12px;
  `}

  ${media.md`
    font-size: 23px;
    padding: 0 0 0 20px;
  `}
  
  ${media.xl`
    margin-top: 6px;
    font-size: 14px;
    padding: 0 0 0 22px;
  `}
  
  ${media.xxl`
    padding: 0 0 0 14px;
  `}
`;

export const ItalicText = styled.span`
  font-style: italic;
  font-family: 'Panel-Sans';
`;

export const FavouriteImage = styled.div`
  height: 16px;

  ${media.sm`
    height: 18px;
  `}

  ${media.md`
    height: 24px;
  `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Favourite = styled.div`
  ${media.xl`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    gap: 2px;
  `}
`;

export const Cart = styled.div`
  height: 16px;

  ${media.sm`
    height: 18px;
  `}

  ${media.md`
    height: 24px;
  `}
  
  ${media.xxl`
    height: 19px;
  `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
