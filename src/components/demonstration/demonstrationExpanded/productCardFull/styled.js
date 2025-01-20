import styled from 'styled-components';
import { media } from '@components/bootstrap-grid';

export const Wrapper = styled.div`
  background: #d7d7d1;
  display: flex;
  flex-direction: column;
  padding: 64px 0 68px 0;

  ${media.sm`
    padding: 153px 0 118px 0;
  `}

  ${media.md`
    padding: 150px 0 82px 0;
  `}

  ${media.lg`
    padding: 199px 0 130px 0;
  `}

  ${media.xl`
    padding: 141px 0 221px;
    width: 50%;
  `}

  ${media.xxl`
    padding: 214px 0 143px;
  `}
`;

export const CollectionText = styled.div`
  flex-direction: column;
  color: #12100e;
  font-family: 'Panel-Sans';
  font-style: normal;
  line-height: 20px;
  letter-spacing: 1.8px;
  font-weight: 400;
  display: flex;
  font-size: 12px;
  padding: 0 25px 33px 31px;

  ${media.sm`
    padding: 0 26px 27px 37px;
  `}

  ${media.md`
    font-size: 14px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 2.1px;
    padding: 0 95px 78px 50px;
  `}

  ${media.lg`
    padding: 0 250px 78px 68px;
    font-size: 14px;
  `}

  ${media.xl`
    display: ${({ visibleFooter }) => (visibleFooter ? 'flex' : 'none')};
    padding: 0 0 30px 50px;
  `}

  ${media.xxl`
    padding: 0 317px 0 220px;
    gap: 10px;
    font-size: 14px;
    font-weight: 700;
  `}
`;

export const CollectionDef = styled.div`
  flex-direction: row;
  justify-content: flex-start;
  font-weight: 700;
  display: flex;

  ${media.lg`
    font-weight: 400;
  `}

  ${media.xxl`
    align-self: flex-start;
  `}
`;

export const CollectionName = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  align-items: center;
  font-weight: 700;
`;

export const CollectionNameElement = styled.div`
  text-align: right;
`;

export const ProductImageWrapper = styled.div`
  padding: 0 26px;
  height: 265px;

  ${media.sm`
    height: 298px;
    padding: 0 29px;
  `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Footer = styled.div`
  padding: 22px 0 0;

  ${media.sm`
    padding: 33px 0 0;
  `}

  ${media.md`
    padding: 28px 0 0;
  `}

  ${media.lg`
    padding: 63px 0 0;
  `}

  ${media.xl`
    paddingp: 14px 0 0;
  `}

  ${media.xxl`
    padding: 2px 0 0;
  `}
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  ${media.sm`
    padding: 0 31px;
  `}

  ${media.md`
    padding: 0 89px;
  `}

  ${media.lg`
    padding: 0 120px;
  `}

  ${media.xl`
    display: none;
  `}

  ${media.xxl`
    padding: 0 343px 0 203px;
  `}
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: 'Inter';
  padding: 22px 82px 0 82px;

  ${media.sm`
    padding: 22px 108px 0 108px;
  `}

  ${media.md`
    padding: 22px 207px 0 217px;
  `}

  ${media.lg`
    padding: 22px 312px 0 312px;
  `}

  ${media.xl`
    padding: 14px 247px 0 125px;
  `}

  ${media.xxl`
    padding: 22px 207px 0 217px;
  `}
`;

export const Price = styled.span`
  color: #0e0d0c;
`;

export const QuantityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const QuantityButton = styled.button`
  background: none;
  border: none;
  color: #0e0d0c;
`;

export const QuantityValue = styled.span`
  color: #0e0d0c;
`;

export const OrderButton = styled.button`
  flex-shrink: 0;
  display: none;
  background: none;
  border: none;

  ${media.sm`
    display: flex;
    margin: 10px 28px 0;
    width: 62px;
    height: 18px;
    align-self: flex-end;
  `}

  ${media.md`
    width: 80px;
    height: 19px;
    margin: 0 15px 44px 0;
    display: flex;
  `}

  ${media.lg`
    margin: 0 21px 38px 0;
  `}

  ${media.xl`
    margin: 0 15px 27px 0;
  `}

  ${media.xxl`
    margin: 16px 32px;
  `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ImageBackground = styled.div`
  background-image: url(${({ $background }) => $background.src});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;

  ${media.md`
    height: 317px;
    margin: 0 88px;
  `}

  ${media.lg`
    height: 424px;
    margin: 0 119px;
  `}

  ${media.xl`
    height: ${({ visibleFooter }) => (visibleFooter ? '265px' : '295px')};
  `}

  ${media.xxl`
    height: 300px;
    margin: 0 285px;
  `}
`;

export const AtmoDescContainer = styled.div`
  display: flex;

  ${media.xl`
    flex-direction: row;
    padding: 0 113px;
  `}
`;

export const PaginationButtonImg = styled.div`
  ${({ $rotate }) => $rotate && 'transform: $rotate(180deg);'}
`;
