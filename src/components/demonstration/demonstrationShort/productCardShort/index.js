import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useScreen } from '@context/screenContext';
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
  ProductImageSubWrapper,
} from './styled';
import NextImage from '@components/images/next-image';

export default function ProductCardShort({
  productCard,
  $isTriggered,
  collection,
}) {
  const { isPhoneL } = useScreen();
  const { collection_prefix } = productCard;
  const firstCollection = collection?.[0].collectionName;
  const firstProduct = collection?.[0].collectionItems?.[0].name;
  return (
    <Wrapper $isTriggered={$isTriggered}>
      {!isPhoneL ? (
        <>
          <CollectionText $isTriggered={$isTriggered}>
            <CollectionDef>{collection_prefix}</CollectionDef>
            <CollectionName>
              {firstCollection}
              <br />
              {firstProduct}
            </CollectionName>
          </CollectionText>
          <ProductImageWrapper>
            <ProductImageSubWrapper>
              <NextImage src={'https://i.imgur.com/jMyEpUH.jpeg'} fill />
            </ProductImageSubWrapper>
          </ProductImageWrapper>
          <OrderButton>
            <Image src={orderButton} alt="Order Button" />
          </OrderButton>
        </>
      ) : (
        <>
          <CollectionText $isTriggered={$isTriggered}>
            <CollectionDef>{collection_prefix}</CollectionDef>
            <CollectionName>{firstCollection}</CollectionName>
          </CollectionText>
          <AtmoDescContainer>
            <ImageBackground>
              <ProductImageSubWrapper>
                <NextImage src={'https://i.imgur.com/jMyEpUH.jpeg'} fill />
              </ProductImageSubWrapper>
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
  }).isRequired,
  $isTriggered: PropTypes.bool,
  collection: PropTypes.array,
};
