import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 133px 0 120px 248px;
`;

export const PaginationButtonImg = styled.div`
  position: absolute;
  z-index: 10;
  width: 115px;
  height: 31px;
  ${({ rotate }) => rotate && 'transform: rotate(180deg);'}
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PaginationButtonImgRotated = styled.div`
  position: absolute;
  z-index: 10;
  width: 115px;
  height: 31px;
  padding: 0 1300px 0 0;
  ${({ $rotate }) => $rotate && 'transform: rotate(180deg);'}
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const GalleryBackground = styled.div`
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const OrderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
`;

export const ProductName = styled.h2`
  font-family: 'Panel-Sans', sans-serif;
  color: #ffffff;
  font-weight: 500;
  font-size: 28px;
  letter-spacing: 1.2px;
`;

export const OrderButton = styled.button`
  background: transparent;
  width: 55px;
  height: 55px;
  background: none;
  border: none;
`;

export const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;
`;

export const OptionMenu = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`;

export const Option = styled.div`
  font-family: 'Panel-Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #cfd0cc;
`;

export const GallerySideImg = styled.div`
  width: 280px;
  height: 315px;
`;
