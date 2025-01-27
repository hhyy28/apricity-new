import React from 'react';
import PropTypes from 'prop-types';
import {
  HeaderBar,
  Icon,
  LogoContainer,
  LogoSubText,
  HeaderButtonContainer,
  SearchInput,
  Favourite,
  FavouriteImage,
  FavText,
  CurrencyBlock,
  CurrencyButton,
  CurrencyText,
  BagButton,
  Cart,
} from './styled';
import { logo, plus, favouriteButton, smallCartButton } from '@svg/index';

import Image from 'next/image';

export default function HomeHeader({ homeHeader }) {
  const { logoSubText, favouriteText, currency, buttons } = homeHeader;

  return (
    <HeaderBar>
      <Icon>
        <Image src={plus} alt="Plus" />
      </Icon>
      <LogoContainer>
        <Image src={logo} alt="MainLogo" />
        <LogoSubText>{logoSubText}</LogoSubText>
      </LogoContainer>
      <HeaderButtonContainer>
        <SearchInput />
        <Favourite>
          <FavouriteImage>
            <Image src={favouriteButton} alt="Favourite Button" />
          </FavouriteImage>
          <FavText>{favouriteText}</FavText>
        </Favourite>
        <CurrencyBlock>
          <CurrencyButton>{currency.button}</CurrencyButton>
          <CurrencyText>{currency.text}</CurrencyText>
        </CurrencyBlock>
        <BagButton>{buttons.bag}</BagButton>
        <Cart>
          <Image src={smallCartButton} alt="Cart Button" />
        </Cart>
      </HeaderButtonContainer>
    </HeaderBar>
  );
}

HomeHeader.propTypes = {
  homeHeader: PropTypes.shape({
    logoSubText: PropTypes.string.isRequired,
    favouriteText: PropTypes.string.isRequired,
    currency: PropTypes.shape({
      button: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
    buttons: PropTypes.shape({
      bag: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
