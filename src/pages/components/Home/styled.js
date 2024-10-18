import styled from 'styled-components';

export const Container = styled.div`
  background-color: #857C61;
  width: 320px;
  height: 568px;
  box-sizing: border-box;

  @media (max-width: 360px) and (max-height: 780px) {
    width: 360px;
    height: 780px;
  }

  @media (min-width: 320px) and (max-width: 320px) and (min-height: 568px) and (max-height: 568px) {
    width: 320px;
    height: 568px;
  }

  @media (min-width: 569px) and (max-width: 767px) {
    width: 569px;
    height: 767px;
  }

  @media (min-width: 1024px) and (max-width: 1024px) and (min-height: 768px) and (max-height: 768px) {
    width: 1024px;
    height: 768px;
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
  font-family: 'Roboto-Regular'; 
  font-weight: 400;
  line-height: 14px;
  margin-top: 13px;
  max-width: 100%;
`;

export const HeaderBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-right: 16px;
  padding-top: 26px;
  padding-left: 25px;
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
  margin-left: 40px;
  margin-right: 32px;
  flex-direction: column;
  width: 253px;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  font-family: 'Roboto-Regular'; 
`;

export const CollectionDef = styled.div`
  display: flex;
  justify-content: flex-start; 
  text-align: right; 
  color: #364251;
  font-family: 'Roboto-LIGHT';
  font-size: 13px;
  margin-bottom: 5px;
`;

export const CollectionName = styled.div`
  display: flex;
  justify-content: flex-start; 
  text-align: right; 
  color: #364251;
  font-family: 'Roboto-Bold';
  font-size: 13px;
`;


export const GalleryImg = styled.div`
  max-width: 100%;
  align-items: center;
`;


export const OrderButton = styled.button`
  background-color: transparent;
  border: 1px solid black;
  padding: 5px 15px;
  cursor: pointer;
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
  font-family: 'Roboto-Light';
  font-size: 14px;
  color: #292929;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1;
  margin-right: 15px;
`;
