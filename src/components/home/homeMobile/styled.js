import styled from 'styled-components';
import { media } from '@components/bootstrap-grid';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10.2vh 0 3.17vh;

  ${media.sm`
    padding: 14.1vh 0 8.5vh;
  `}

  ${media.md`
    padding: 7.56vh 0 4.4vh;
  `}

  ${media.lg`
    padding: 4.98vh 0 3.3vh;
  `}

  ${media.xl`
    padding: 95px 0 52px 0;
  `}

  ${media.xxl`
    padding: 133px 0 120px 0;
  `}
`;

export const OptionMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 1.76vh;
  padding: 0 5.63vh 0 0;

  ${media.sm`
    padding: 0 4.74vh 0.77vh 0;
  `}

  ${media.md`
    gap: 1.83vh;
    padding: 0.65vh 12.39vh 0.65vh 0;
  `}

  ${media.lg`
    padding: 0.88vh 11.62vh 1.37vh 0;
  `}

  ${media.xl`
    position: absolute;
    padding: 0;
    top: 258px;
    right: 20px;
  `}
`;


export const Option = styled.div`
  font-family: 'Panel-Sans', sans-serif;
  font-size: 11px;
  font-weight: 500;
  color: #cfd0cc;
  letter-spacing: 0.55px;
`;

