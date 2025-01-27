import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useScreen } from '@context/ScreenContext';
import { productImage } from '@images/index';
import { orderButton } from '@svg/index';
import {
  Wrapper,
  CollectionText,
  ProductImageWrapper,
  CollectionName,
  CollectionDef,
  AtmoDescContainer,
  ImageBackground,
  OrderButton,
} from './styled';

export default function ProductCardShort({ productCard, $isAtScreenTop }) {
  const { isPhoneL } = useScreen();
  const { collection_prefix, collection_name, product_name } = productCard;

  return (
    <Wrapper $isAtScreenTop={$isAtScreenTop}>
      {!isPhoneL ? (
        <>
          <CollectionText $isAtScreenTop={$isAtScreenTop}>
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
          <OrderButton>
            <Image src={orderButton} alt="Order Button" />
          </OrderButton>
        </>
      ) : (
        <>
          <CollectionText $isAtScreenTop={$isAtScreenTop}>
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
    </Wrapper>
  );
}

ProductCardShort.propTypes = {
  productCard: PropTypes.shape({
    collection_prefix: PropTypes.string.isRequired,
    collection_name: PropTypes.string.isRequired,
    product_name: PropTypes.string.isRequired,
  }).isRequired,
  $isAtScreenTop: PropTypes.bool,
};
