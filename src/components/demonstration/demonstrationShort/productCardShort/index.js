import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useScreen } from '@context/screenContext';
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
import NextImage from '@components/images/next-image';

export default function ProductCardShort({ productCard, $isTriggered }) {
  const { isPhoneL } = useScreen();
  const { collection_prefix, collection_name, product_name } = productCard;

  return (
    <Wrapper $isTriggered={$isTriggered}>
      {!isPhoneL ? (
        <>
          <CollectionText $isTriggered={$isTriggered}>
            <CollectionDef>{collection_prefix}</CollectionDef>
            <CollectionName>
              {collection_name}
              <br />
              {product_name}
            </CollectionName>
          </CollectionText>
          <ProductImageWrapper>
            <NextImage/>
          </ProductImageWrapper>
          <OrderButton>
            <Image src={orderButton} alt="Order Button" />
          </OrderButton>
        </>
      ) : (
        <>
          <CollectionText $isTriggered={$isTriggered}>
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
  $isTriggered: PropTypes.bool,
};
