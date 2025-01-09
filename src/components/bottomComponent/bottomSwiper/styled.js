import styled from 'styled-components';
import { media } from '@components/bootstrap-grid';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 151px 0 0;
  background: #333d4a;
  ${media.sm`
    padding: 192px 0 0;
    background: #182B38;
  `}

  ${media.md`
    padding: 168px 0 0;
    background: #333d4a;
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

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${media.md`
    flex-direction: row;
    gap: 112px;
    padding: 0 0 11px;
    justify-content: center;
  `}
  ${media.lg`
    align-items: flex-end;
    padding: 0 0 35px;
  `}
`;
export const FooterSubContainer = styled.div`
  display: none;
  ${media.md`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  `}
`;

export const OrderButton = styled.div`
  ${media.lg`
    display: none;
  `}
`;

export const NotebookInfo = styled.div`
  font-family: 'Panel-Sans';
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 1.2px;
  color: #f2f3ef;
`;

export const CollectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  color: #cecfca;
  letter-spacing: 1px;
  line-height: 18px;
  padding: 16px 34px 9px;
  ${media.sm`
    flex-direction: column;
    padding: 0 36px 53px 184px;
  `}

  ${media.md`
    padding: 37px 0 0 0;
  `}

  ${media.lg`
    padding: 16px 0 17px 0;
  `}
`;

export const CollectionDef = styled.div`
  font-family: 'Panel-Sans';
  font-size: 13px;
  font-weight: 400;
  color: #cecfca;
  letter-spacing: 1px;
`;

export const CollectionName = styled.p`
  font-family: 'Panel-Sans', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #cecfca;
  margin: 0;
`;
