import styled from 'styled-components';
import { media } from '@components/bootstrap-grid';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 151px 0 0;
  background: #857c61;
  transition: background-color 1s ease;

  ${media.sm`
    padding: 192px 0 0;
  `}

  ${media.md`
    padding: 168px 0 0;
  `}
`;

export const OptionMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 10px;
  padding: 14px 0 0 37px;

  ${media.sm`
    padding: 7px 187px 78px 45px;
  `}

  ${media.md`
    justify-content: flex-end;
    gap: 14px;
    padding: 5px 95px 5px 0;
  `}

  ${media.lg`
    padding: 0px 182px 52px 0;
  `}
`;

export const Option = styled.div`
  font-family: 'Panel-Sans';
  font-size: 11px;
  font-weight: 500;
  color: #cfd0cc;
  letter-spacing: 0.55px;
`;
