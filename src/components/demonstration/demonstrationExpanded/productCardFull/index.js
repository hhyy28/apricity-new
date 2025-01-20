import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import {
  Wrapper,
  CollectionText,
  ProductImageWrapper,
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
} from './styled';
import { useScreen } from '@context/ScreenContext';
import { productImage } from '@images/index';
import { orderButton } from '@svg/index';
import { PaginationButton } from '@svg/paginationButton';

export default function ProductCardFull({ productCard }) {
  const { isPhoneM, isPhoneS, isTabletHorizontal } = useScreen();
  const {
    collection_prefix,
    collection_name,
    product_name,
    price_label,
    initial_quantity,
  } = productCard;

  const [quantity, setQuantity] = useState(initial_quantity);
  const [showHeaderDescription, setShowHeaderDescription] = useState(false);

  useEffect(() => {
    setShowHeaderDescription(isTabletHorizontal);
  }, [isTabletHorizontal]);

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(prevQuantity + change, 1));
  };

  return (
    <>
      <Wrapper>
        {isPhoneS || isPhoneM ? (
          <>
            <CollectionText>
              <CollectionDef>{collection_prefix}</CollectionDef>
              <CollectionName>
                {collection_name}
                <br />
                {product_name}
              </CollectionName>
            </CollectionText>
            <ProductImageWrapper>
              <Image src={productImage} alt={product_name} />
            </ProductImageWrapper>
          </>
        ) : (
          <>
            <CollectionText>
              <CollectionDef>{collection_prefix}</CollectionDef>
              <CollectionName>{collection_name}</CollectionName>
            </CollectionText>
            <AtmoDescContainer>
              <ImageBackground $background={productImage}>
                <OrderButton>
                  <Image src={orderButton} alt="Order Button" />
                </OrderButton>
              </ImageBackground>
            </AtmoDescContainer>
          </>
        )}

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
    </>
  );
}

ProductCardFull.propTypes = {
  productCard: PropTypes.shape({
    collection_prefix: PropTypes.string.isRequired,
    collection_name: PropTypes.string.isRequired,
    product_name: PropTypes.string.isRequired,
    price_label: PropTypes.string.isRequired,
    initial_quantity: PropTypes.number.isRequired,
  }).isRequired,
};
