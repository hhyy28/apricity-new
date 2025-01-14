import styled from 'styled-components';
import { media } from '@components/bootstrap-grid';

export const HeaderBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 26px 16px 0 25px;

  ${media.sm`
    padding: 40px 18px 0 28px;
  `}

  ${media.md`
    padding: 44px 30px 0 30px;
  `}

  ${media.lg`
    padding: 70px 31px 0 32px;
  `}

  ${media.xl`
    padding: 38px 43px 0 43px;
  `}

  ${media.xxl`
    padding: 43px 60px 0 61px;
  `}
`;

export const HeaderButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  ${media.sm`
    gap: 9px;
  `}

  ${media.md`
    gap: 12px;
  `}

  ${media.xl`
    gap: 16px;
    align-items: flex-end;
  `}

  ${media.xxl`
    gap: 26px;
    padding: 4px 0 0 0;
  `}
`;

export const BagButton = styled.button`
  padding: 1px 3px;
  background: #f2f3ef;
  font-family: 'Panel-sans';
  font-size: 12px;
  color: #292929;
  letter-spacing: 1.2px;
  box-shadow: none;
  text-shadow: none;
  border: none;
  display: none;

  ${media.xxl`
    display: block;
  `}
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 120px;
  gap: 13px;

  ${media.sm`
    width: 132px;
    gap: 14px;
  `}

  ${media.lg`
    gap: 12px;
  `}

  ${media.xxl`
    gap: 17px;
  `}

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const Icon = styled.div`
  height: 23px;

  ${media.sm`
    height: 25px;
  `}

  ${media.md`
    height: 31px;
  `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const LogoSubText = styled.div`
  color: #292929;
  text-align: right;
  font-family: 'Panel-Sans', sans-serif;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 1.35px;
  font-size: 10px;
  padding: 0 0 0 20px;

  ${media.sm`
    padding: 0 0 0 32px;
  `}

  ${media.md`
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 1.2px;
    padding: 0 7px 0 35px;
  `}

  ${media.lg`
    padding: 0 6px 0 34px;
  `}

  ${media.xxl`
    padding: 0 7px 0 40px;
  `}
`;

export const FavouriteImage = styled.div`
  height: 16px;

  ${media.sm`
    height: 18px;
  `}

  ${media.md`
    height: 24px;
  `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Favourite = styled.div`
  ${media.xl`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    gap: 2px;
  `}
`;

export const Cart = styled.div`
  height: 16px;
  flex-shrink: 0;

  ${media.sm`
    height: 18px;
  `}

  ${media.md`
    height: 24px;
  `}

  ${media.xxl`
    height: 19px;
  `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SearchInput = styled.input`
  width: 63px;
  border: 1px solid #292929;
  background: transparent;
  display: none;

  ${media.xl`
    display: block;
  `}
`;

export const CurrencyBlock = styled.div`
  display: none;

  ${media.xxl`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    padding: 4px 0 0 0;
    gap: 4px;
  `}
`;

export const CurrencyText = styled.div`
  display: none;
  color: #292929;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1.8px;
  line-height: 15px;
  font-family: 'Panel-sans';

  ${media.xxl`
    display: block;
  `}
`;

export const CurrencyButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #292929;

  ${media.xxl`
    display: block;
  `}
`;

export const FavText = styled.div`
  display: none;
  color: #292929;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1.8px;
  line-height: 15px;
  font-family: 'Panel-sans';
  text-align: right;

  ${media.xxl`
    display: block;
  `}
`;
