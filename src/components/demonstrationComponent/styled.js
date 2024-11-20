import styled from 'styled-components';
import { media } from 'src/components/bootstrap-grid';

export const Wrapper = styled.div`
  background-image: url(${({ background }) => background.src});
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-size: cover;
  background-position: center;
  height: 568px;
  align-items: space-between;

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
    height: 768px;
    width: 50%;
  `}

  ${media.xxl`
    height: 1080px;
  `}
`;

export const OrderButton = styled.button`
  background-color: transparent;
  width: 55px;
  height: 16px;
  background: none;
  border: none;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  ${media.sm`
    padding: 0 47px 0px 55px;
  `}

  ${media.md`
    padding: 0 47px 0px 84px;
  `}

  ${media.lg`
    display: none;
  `}

  ${media.xl`
    padding: 0 9px 47px 148px;
    display: flex;
  `}

  ${media.xxl`
    padding: 0px 48px 98px 204px;
  `}
`;

export const PaginationButtonNumbers = styled.button`
  background-color: transparent;
  border: none;
  color: #f2f3ef;
  text-align: right;
  font-family: 'Panel-Sans';
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0.5px;
  background: none;
  border: none;

  ${media.xxl`
    display: none;
  `}
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
  padding-bottom: 18px;

  ${media.sm`
    padding-bottom: 54px;
  `}

  ${media.md`
    padding-bottom: 86px;
  `}

  ${media.lg`
    padding-bottom: 18px;
  `}
`;

export const PaginationButtonImg = styled.div`
  flex-shrink: 0;
  ${({ rotate }) => rotate && 'transform: rotate(180deg);'}
  width: 55px;
  height: 20px;

  ${media.lg`
    width: 115px;
    height: 33px;
  `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
