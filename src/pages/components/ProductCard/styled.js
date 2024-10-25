import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 320px;
  background-color: #D7D7D1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 64px 0;
`;

export const CollectionText = styled.div`
  flex-direction: column;
  color: #12100E;
  font-family: 'Panel-sans';
  line-height: 20px;
  letter-spacing: 1.8px;
  font-size: 12px;
  padding: 0 33px 33px 33px;
  font-weight: 400;
  display: flex;
`;
export const CollectionDef = styled.div`
  flex-direction: row;
  justify-content: flex-start;
  font-weight: 700;
  display: flex;
`
export const CollectionName = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  align-items: center;
`
export const CollectionNameElement = styled.div`

  text-align: right;
`
export const ProductImageWrapper = styled.div`
  padding: 0px 26px;
  height: 265px;
`;

export const Footer = styled.div`
  padding-top: 22px;
`
export const PagginationContainer= styled.div`
  padding: 0 11px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 22px 88px 0px 88px;
  align-items: center;
`;

export const Price = styled.span`
  color: #0E0D0C;
`;

export const QuantityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
  align-items: center;
`;

export const QuantityButton = styled.button`
  background: none;
  border: none;
  color: #0E0D0C;
`;

export const QuantityValue = styled.span`
  color: #0E0D0C;
  font-family: 'Panel-Sans';
`;

