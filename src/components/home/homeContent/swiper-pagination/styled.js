import styled from 'styled-components';
import { media } from '@components/bootstrap-grid';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 28px;

  ${media.xl`
    padding: 40px 194px 0 151px;
  `}

  ${media.xxl`
    position: absolute;
    bottom: 50%;
    width: 84%;
    z-index: 3;
  `}
`;

export const PaginationButtonNumbers = styled.button`
  background: transparent;
  border: none;
  font-size: 14px;
  color: black;
  cursor: pointer;
  outline: none;
  &:focus {
    outline: none;
  }

  ${media.xxl`
    display: none;
  `}
`;

export const PaginationButtonImg = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  ${({ $rotate }) => $rotate && 'transform: rotate(180deg);'}
  outline: none;
  &:focus {
    outline: none;
  }
`;
