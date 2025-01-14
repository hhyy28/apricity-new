import styled from 'styled-components';
import { media } from '@components/bootstrap-grid';

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 33px 0 0;

  ${media.sm`
    padding: 110px 0 0;
  `}

  ${media.md`
    padding: 58px 0 0;
  `}

  ${media.lg`
    padding: 51px 0 0;
  `}
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 18px;

  ${media.sm`
    padding: 0 0 63px;
  `}

  ${media.md`
    padding: 0 0 34px;
  `}

  ${media.lg`
    padding: 0 0 40px;
  `}
`;

export const OptionMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
  padding: 0 32px 0 0;

  ${media.sm`
    padding: 0 37px 6px 0;
  `}

  ${media.md`
    gap: 14px;
    padding: 5px 95px 5px 0;
  `}

  ${media.lg`
    padding: 9px 119px 14px 0;
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
  padding: 21px 0 0 40px;

  ${media.sm`
    padding: 36px 0 0 44px;
  `}

  ${media.md`
    align-self: flex-end;
    padding: 36px 0 0 16px;
  `}

  ${media.lg`
    padding: 36px 0 30px 17px;
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
  height: 204px;
  margin: 0 0 18px;

  ${media.sm`
    margin: 0 0 41px;
  `}

  ${media.md`
    height: 277px;
    margin: 0 0 53px;
  `}

  ${media.lg`
    height: 385px;
    margin: 0 0 74px;
  `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
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

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 14px 29px;
`;
