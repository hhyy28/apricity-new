import styled from 'styled-components';
import { media } from 'src/components/bootstrap-grid';

export const HeaderBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-right: 16px;
  padding-top: 26px;
  padding-left: 25px;

  ${media.sm`
    padding-right: 18px;
    padding-top: 40px;
    padding-left: 28px;
  `}

  ${media.md`
    padding-right: 30px;
    padding-top: 44px;
    padding-left: 30px;
  `}

  ${media.lg`
    padding-right: 31px;
    padding-top: 70px;
    padding-left: 32px;
  `}

  ${media.xl`
    padding-right: 43px;
    padding-top: 38px;
    padding-left: 43px;
  `}

  ${media.xxl`
    padding-top: 43px;
    padding-left: 61px;
    padding-right: 60px;
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

  ${media.lg`
    gap: 12px;
  `}

  ${media.xl`
    gap: 16px;
    align-items: flex-end;
  `}

  ${media.xxl`
    gap: 26px;
    padding-top: 4px;
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

  ${media.md`
    width: 155px;
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
  padding-left: 20px;

  ${media.sm`
    padding-left: 32px;
  `}

  ${media.md`
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 1.2px;
    padding-left: 35px;
    padding-right: 7px;
  `}

  ${media.lg`
    padding-left: 34px;
    padding-right: 6px;
  `}

  ${media.xxl`
    padding-left: 40px;
    padding-right: 7px;
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
  background-color: transparent;
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
    padding-top: 4px;
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
