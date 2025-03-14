import styled from 'styled-components';
import { media } from '@components/bootstrap-grid';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${media.xl`
    flex-direction: row;
    width: 100%;
    height: 768px;
  `}

  ${media.xl`
    height: 1080px
  `}
`;
