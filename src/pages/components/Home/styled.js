import styled from 'styled-components';

export const Container = styled.div`
  background-color: #857C61;
  width: 320px;
  box-sizing: border-box;

  @media (max-width: 360px){
    width: 360px;
  }

  @media (min-width: 569px) {
    width: 569px;
  }

  @media (min-width: 1024px)  {
    width: 1024px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 120px;
  height: 17.273px;
`;

export const LogoWrapper = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div`
  width: 23px;
  height: 23px;
`;

export const LogoSubText = styled.div`
  color: #292929;
  text-align: right;
  font-size: 10px;
  font-family: 'Panel-Sans', sans-serif; 
  font-weight: 400;
  line-height: 14px;
  margin-top: 13px;
  max-width: 100%;
  letter-spacing: 0.5px;
`;

export const HeaderBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-right: 16px;
  padding-top: 26px;
  padding-left: 25px;
  width: 320px;
`;

export const HeaderButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Favourite = styled.div`
  width: 16.34px;
  height: 16px;
`;

export const Cart = styled.div`
  width: 23.631px;
  height: 16px;
`;

export const MenuContainer = styled.div`
  display: flex;
  padding-top: 73px;
  padding-left: 40px;
  padding-right: 32px;
  flex-direction: column;
  width: 320px;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 18px;
  width: 320px;
`;

export const OptionMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
`;

export const Option = styled.div`
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  color: #CFD0CC;
  margin-bottom: 6px;
  font-family: 'Panel-Sans', sans-serif;
`;

export const CollectionDef = styled.p`
  font-family: 'Panel-Sans', sans-serif;
  font-size: 13px;
  color: #364251;
  font-weight: 400;
`;

export const CollectionName = styled.p`
  display: flex;
  justify-content: flex-start; 
  text-align: right; 
  color: #364251;
  font-family: 'Panel-Sans', sans-serif;
  font-weight: 500;
  font-size: 13px;
`;

export const CollectionContainer = styled.div`
  margin-top: 21px;
  margin-bottom: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  letter-spacing: 1.04px;
`;

export const GalleryImg = styled.div`
  max-width: 100%;
  align-items: center;
`;

export const OrderButton = styled.div`
  background-color: transparent;
`;

export const PagginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 28px;
`;

export const PaginationButton = styled.div`
  background-color: transparent;
  border: none;
  font-size: 14px;
  color: black;
  cursor: pointer;
`;

export const OrderContainer = styled.div`
  display: flex;
  padding: 14px 29px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const NotebookText = styled.div`
  font-family: 'Panel-Sans', sans-serif;
  font-size: 12px;
  color: #000;
  margin-right: 15px;
  letter-spacing: 1.2px;
  font-weight: 400;
`;
