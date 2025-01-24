import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import {
  Wrapper,
  CollectionText,
  PriceWrapper,
  Price,
  QuantityWrapper,
  QuantityButton,
  QuantityValue,
  CollectionName,
  CollectionDef,
  Footer,
  PaginationContainer,
  PaginationButtonImg,
  AtmoDescContainer,
  ImageBackground,
  OrderButton,
  AtmoText,
  AtmoTextTitle,
  AtmoTextCopy,
} from './styled';
import { useScreen } from '@context/ScreenContext';
import { productImage } from '@images/index';
import { orderButton } from '@svg/index';
import { PaginationButton } from '@svg/paginationButton';

export default function ProductCardFull({ productCard }) {
  const { isPhoneL } = useScreen();
  const {
    collection_prefix,
    collection_name,
    price_label,
    initial_quantity,
    atmo_title,
    atmo_info,
  } = productCard;

  const [quantity, setQuantity] = useState(initial_quantity);

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(prevQuantity + change, 1));
  };

  return (
    <Wrapper>
      <CollectionText>
        <CollectionDef>{collection_prefix}</CollectionDef>
        <CollectionName>{collection_name}</CollectionName>
      </CollectionText>
      <AtmoDescContainer>
        <ImageBackground $background={productImage}>
          {isPhoneL && (
            <OrderButton>
              <Image src={orderButton} alt="Order Button" />
            </OrderButton>
          )}
        </ImageBackground>
        {!isPhoneL && (
          <OrderButton>
            <Image src={orderButton} alt="Order Button" />
          </OrderButton>
        )}
        <AtmoText>
          <AtmoTextTitle>{atmo_title}</AtmoTextTitle>
          <AtmoTextCopy>{atmo_info}</AtmoTextCopy>
        </AtmoText>
      </AtmoDescContainer>
      <Footer>
        <PaginationContainer>
          <PaginationButtonImg>
            <PaginationButton fillcolor="#2B2726" />
          </PaginationButtonImg>
          <PaginationButtonImg $rotate>
            <PaginationButton fillcolor="#2B2726" />
          </PaginationButtonImg>
        </PaginationContainer>
        <PriceWrapper>
          <Price>{price_label}</Price>
          <QuantityWrapper>
            <QuantityButton onClick={() => handleQuantityChange(-1)}>
              -
            </QuantityButton>
            <QuantityValue>{quantity}</QuantityValue>
            <QuantityButton onClick={() => handleQuantityChange(1)}>
              +
            </QuantityButton>
          </QuantityWrapper>
        </PriceWrapper>
      </Footer>
    </Wrapper>
  );
}

ProductCardFull.propTypes = {
  productCard: PropTypes.shape({
    collection_prefix: PropTypes.string.isRequired,
    collection_name: PropTypes.string.isRequired,
    price_label: PropTypes.string.isRequired,
    atmo_title: PropTypes.string.isRequired,
    atmo_info: PropTypes.string.isRequired,
    initial_quantity: PropTypes.number.isRequired,
  }).isRequired,
};
