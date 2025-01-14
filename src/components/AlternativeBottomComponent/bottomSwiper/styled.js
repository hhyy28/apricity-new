import styled from 'styled-components';
import { media } from '@components/bootstrap-grid';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 151px 0 0;
  background: #333d4a;

  ${media.sm`
    padding: 224px 0 0;
  `}

  ${media.md`
    padding: 211px 0 0;
    background: #1e2a3b;
  `}

  ${media.lg`
    padding: 282px 0 0;
  `}
`;
