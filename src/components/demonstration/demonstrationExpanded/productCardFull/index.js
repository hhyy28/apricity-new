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
  OrderButton,
  AtmoText,
  AtmoTextTitle,
  AtmoTextCopy,
  ImageContainer,
  ImageSubWrapper,
} from './styled';
import { useScreen } from '@context/screenContext';
import { orderButton } from '@svg/index';
import { PaginationButton } from '@svg/paginationButton';
import NextImage from '@components/images/next-image';

export default function ProductCardFull({ productCard, collection }) {
  const { isPhoneL } = useScreen();
  const { collection_prefix, price_label, initial_quantity, atmo_title } =
    productCard;

  const firstCollection = collection?.[0];
  const { collectionName, atmosphere } = firstCollection;
  const [quantity, setQuantity] = useState(initial_quantity);

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(prevQuantity + change, 1));
  };

  return (
    <Wrapper>
      <CollectionText>
        <CollectionDef>{collection_prefix}</CollectionDef>
        <CollectionName>{collectionName}</CollectionName>
      </CollectionText>
      <AtmoDescContainer>
        <ImageContainer>
          <ImageSubWrapper>
            <NextImage src="https://imgur.com/dp1wMeZ.jpeg" fill />
          </ImageSubWrapper>
        </ImageContainer>
        {isPhoneL && (
          <OrderButton>
            <Image src={orderButton} alt="Order Button" />
          </OrderButton>
        )}
        {!isPhoneL && (
          <OrderButton>
            <Image src={orderButton} alt="Order Button" />
          </OrderButton>
        )}
        <AtmoText>
          <AtmoTextTitle>{atmo_title}</AtmoTextTitle>
          <AtmoTextCopy>{atmosphere}</AtmoTextCopy>
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
    collection_prefix: PropTypes.string,
    price_label: PropTypes.string,
    atmo_title: PropTypes.string,
    initial_quantity: PropTypes.number,
  }).isRequired,
  collection: PropTypes.array,
};
