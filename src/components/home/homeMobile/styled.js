import styled from 'styled-components';
import { media } from 'src/components/bootstrap-grid';

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 33px;

  ${media.sm`
    padding-top: 110px;
  `}

  ${media.md`
    padding-top: 58px;
  `}

  ${media.lg`
    padding-top: 51px;
  `}
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 18px;

  ${media.sm`
    padding-bottom: 63px;
  `}

  ${media.md`
    padding-bottom: 34px;
  `}

  ${media.lg`
    padding-bottom: 40px;
  `}
`;

export const OptionMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
  padding-right: 32px;

  ${media.sm`
    padding-right: 37px;
    padding-bottom: 6px;
  `}

  ${media.md`
    gap: 14px;
    padding-right: 95px;
    padding-top: 5px;
    padding-bottom: 5px;
  `}

  ${media.lg`
    padding-right: 119px;
    padding-top: 9px;
    padding-bottom: 14px;
  `}
`;

export const Option = styled.div`
  font-family: 'Panel-Sans', sans-serif;
  font-size: 11px;
  font-weight: 500;
  color: #cfd0cc;
  letter-spacing: 0.55px;
`;

export const CollectionDef = styled.div`
  font-family: 'Panel-Sans', sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: #364251;
  line-height: 18px;
  letter-spacing: 1px;
`;

export const CollectionName = styled.p`
  font-family: 'Panel-Sans', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #364251;
`;

export const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  letter-spacing: 1px;
  line-height: 18px;
  padding-top: 21px;
  padding-left: 40px;

  ${media.sm`
    padding-top: 36px;
    padding-left: 44px;
  `}

  ${media.md`
    align-self: flex-end;
    padding-left: 16px;
  `}

  ${media.lg`
    padding-left: 17px;
    padding-top: 36px;
    padding-bottom: 30px;
  `}
`;

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  position: relative;
  gap: 15px;

  ${media.sm`
    gap: 17px;
  `}

  ${media.md`
    gap: 46px;
  `}

  ${media.lg`
    gap: 64px;
  `}
`;

export const GalleryImg = styled.div`
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  height: 285px;
  width: 253px;

  ${media.sm`
    height: 315px;
    width: 280px;
  `}

  ${media.md`
    height: 427px;
    width: 379px;
  `}

  ${media.lg`
    height: 593px;
    width: 527px;
  `}
`;

export const GallerySideImg = styled.div`
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  height: 204px;
  margin-bottom: 18px;

  ${media.sm`
    margin-bottom: 41px;
  `}

  ${media.md`
    height: 277px;
    margin-bottom: 53px;
  `}

  ${media.lg`
    height: 385px;
    margin-bottom: 74px;
  `}
`;

export const OrderButton = styled.button`
  background-color: transparent;
  background: none;
  border: none;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 28px;
`;

export const PaginationButtonNumbers = styled.button`
  background-color: transparent;
  border: none;
  font-size: 14px;
  color: black;
  cursor: pointer;
  background: none;
  border: none;
`;

export const NotebookText = styled.div`
  font-family: 'Panel-Sans', sans-serif;
  font-size: 12px;
  color: #000000;
  margin-right: 15px;
  letter-spacing: 1.2px;
  font-weight: 400;
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 14px 29px;
`;

export const PaginationButtonImg = styled.div`
  ${({ rotate }) => rotate && 'transform: rotate(180deg);'}
`;
