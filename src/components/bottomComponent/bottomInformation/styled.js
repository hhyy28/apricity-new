import styled from 'styled-components';
import { media } from '@components/bootstrap-grid';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #333d4a;
  font-family: 'Panel-Sans';
  ${media.sm`
    background: #182B38;
  `}
`;

export const DiscoverContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DiscoverTitle = styled.div`
  display: flex;
  flex-direction: row;
  color: #888f6a;
  padding: 0 0 0 26px;
  font-size: 13px;
  font-weight: 700;

  ${media.sm`
    padding: 141px 162px 0 31px;
  `}
`;
export const DiscoverCopy = styled.div`
  padding: 27px 42px 25px 60px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.6px;
  color: #f2f3ef;
  
  ${media.sm`
    padding: 27px 64px 98px;
  `}
`;

export const AtmoContainer = styled.div`

`;

export const AtmoTitle = styled.div`
  background: #625d4d;
  color: #dbd9d6;
  font-weight: 400;
  padding: 2px 197px 4px 26px;
  line-height: 16px;

  ${media.sm`
    padding: 8px 235px 8px 27px;
  `}
`;

export const AtmoCopy = styled.div`
  background: #343a30;
  color: #dbd9d6;
  padding: 35px 31px 9px 46px;
  letter-spacing: 0.6px;
  line-height: 16px;
  ${media.sm`
    padding: 29px 64px 65px;
    font-size: 12px;
  `}
`;
