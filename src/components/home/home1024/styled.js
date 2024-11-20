import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #857c61;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 115px;
  padding-left: 190px;
  gap: 53px;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 52px;
`;

export const OptionMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 29px;
`;

export const Option = styled.div`
  font-style: normal;
  font-weight: 400;
  color: #191919;
  font-family: 'Panel-Sans', sans-serif;
  font-size: 12px;
  letter-spacing: 0.36px;
`;

export const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  letter-spacing: 1px;
  align-self: flex-start;
  line-height: 18px;
`;

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
  justify-content: center;
  gap: 64px;
`;

export const GalleryImg = styled.div`
  flex-shrink: 0;
  margin: 0;
  height: 428px;
  width: 601px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const GallerySideImg = styled.div`
  flex-shrink: 0;
  height: 266px;
  width: 238px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const OrderButton = styled.button`
  background-color: transparent;
  flex-shrink: 0;
  height: 16px;
  width: 55px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 151px;
  padding-right: 194px;
  padding-top: 39px;
`;

export const PaginationButtonNumbers = styled.button`
  background-color: transparent;
  border: none;
  color: #292929;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.5px;
`;

export const PaginationButtonImg = styled.div`
  flex-shrink: 0;
  width: 115px;
  height: 31px;
  ${({ rotate }) => rotate && 'transform: rotate(180deg);'}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  background: #f2f3ef4d;
  padding: 4px 11px 3px 0px;
  width: 248px;
  height: 38px;
`;

export const NotebookText = styled.div`
  font-family: 'Panel-Sans', sans-serif;
  color: #000000;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 1.2px;
  line-height: 18px;
  padding-right: 74px;
`;

export const ResponsiveFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GalleryBackground = styled.div`
  background-image: url(${({ background }) => background.src});
  background-size: cover;
  background-position: center;
  width: 601px;
  height: 428px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0px 9px 55px 0px;
`;

export const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 62px;
  align-items: flex-start;
`;

export const ProductName = styled.div`
  color: #0e0d0c;
  font-family: 'Panel-Sans';
  font-size: 13px;
  letter-spacing: 0.387px;
`;
