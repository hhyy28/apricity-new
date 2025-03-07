import styled from 'styled-components';
import { media } from '@components/bootstrap-grid';

export const Wrapper = styled.div`
  background: #d7d7d1;
  display: flex;
  flex-direction: column;
  padding: 64px 0 152px 0;
  transition: padding 0.7s ease-in-out;

  ${media.sm`
    padding: 153px 0 214px 0;
  `}

  ${media.md`
    padding: 150px 0 171px 0;
  `}

  ${media.lg`
    padding: 199px 0 255px 0;
  `}

  ${media.xl`
    padding: ${({ $isTriggered }) => ($isTriggered ? '252px 113px' : '0')};
    width: 50%;
  `}

  ${media.xxl`
    padding: ${({ $isTriggered }) => ($isTriggered ? '270px 284px 390px ' : '0')};
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
  transition: 0.3s ease-in-out;
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
    display: none;
    padding: 0 0 30px 50px;
  `}

  ${media.xxl`
    display: ${({ $isTriggered }) => ($isTriggered ? 'flex' : 'none')};
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
  height: 265px;
  transition: all 0.3s ease;
  position: relative;
  ${media.sm`
    padding: 0 29px;
  `}
`;

export const ProductImageSubWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
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
    padding: 14px 0 0;
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
  position: absolute;
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
    margin: 24px 32px;
  `}
`;

export const ImageBackground = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;

  ${media.md`
    height: 317px;
  `}

  ${media.lg`
    height: 424px;
  `}

  ${media.xl`
    height: 100%;
  `}
`;

export const PaginationButtonImg = styled.div`
  ${({ $rotate }) => $rotate && 'transform: rotate(180deg);'}
`;

export const AtmoDescContainer = styled.div`
  ${media.md`
    padding: 0 88px;
  `}

  ${media.lg`
    padding: 0 119px;
  `}

  ${media.xl`
    padding: 0;
    margin: 0;
    height: 100%;
  `}
`;
