import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #D7D7D1;
  padding: 134px 0;

  ${media.sm`
    padding: 159px 0 273px;
  `}

  ${media.md`
    padding: 182px 0;
  `}

  ${media.lg`
    padding: 283px 0;
  `}

  ${media.xl`
    padding: 34px 18px 23px 17px;
    font-size: 12px;
  `}
`;

export const TextTitle = styled.div`
  font-weight: 400;
  margin-bottom: 16px;
`;

export const Text = styled.div`
  font-weight: 360;
  letter-spacing: 0.65px;
`;

export const TextWrapper = styled.div`
  font-family: 'Panel-Sans';
  color: #0e0d0c;
  font-size: 13px;
  line-height: 20px;
  background-color: #D0D0CA;
  padding: 23px 38px;
  letter-spacing: 0.65px;
  ${media.sm`
    padding: 64px 64px 25px;
  `}

  ${media.md`
    padding: 102px 120px;
  `}

  ${media.lg`
    padding: 130px 230px;
  `}

  ${media.xl`
    display: none;
  `}
`