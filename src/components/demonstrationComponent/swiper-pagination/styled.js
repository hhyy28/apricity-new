import styled from 'styled-components';

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
  color: #dfddd8;
  cursor: pointer;
  outline: none;
  &:focus {
    outline: none;
  }
`;

export const PaginationButtonImg = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  ${({ rotate }) => rotate && 'transform: rotate(180deg);'}
  outline: none;
  &:focus {
    outline: none;
  }
`;
