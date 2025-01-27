import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 115px 0 0 190px;
  gap: 53px;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 52px;
`;

export const OptionMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 29px;
  position: absolute;
  z-index: 1;
  padding: 40px 0 0 652px;
`;

export const Option = styled.div`
  font-style: normal;
  font-weight: 400;
  color: #191919;
  font-family: 'Panel-Sans', sans-serif;
  font-size: 12px;
  letter-spacing: 0.36px;
`;
