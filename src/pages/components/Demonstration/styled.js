import styled from 'styled-components';
import Background1 from '../../../../public/Backgr1.jpg';

export const Container = styled.div`
  background-image: url(${({ background }) => background.src});
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-size: cover;
  background-position: center;
  width: 320px;
  height: 568px;
  align-items: space-between;
`;

export const OrderButton = styled.div`
  background-color: transparent;
  width: 55px;
  height: 16px;
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
  color: #F2F3EF;
  font-family: 'Panel-Sans';
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 44px 41px;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
`;
