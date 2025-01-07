import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
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
import { useScreen } from '@context/ScreenContext';
import { productImage } from '@images/index';
import { orderButton } from '@svg/index';

export default function ProductCardShort({ productCard, isAtScreenTop }) {
  const { isPhoneM, isPhoneS } = useScreen();
  const { collection_prefix, collection_name, product_name } = productCard;

  return (
    <Wrapper isAtScreenTop={isAtScreenTop}>
      {isPhoneM || isPhoneS ? (
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
          <CollectionText visiblefooter={false}>
            <CollectionDef>{collection_prefix}</CollectionDef>
            <CollectionName>{collection_name}</CollectionName>
          </CollectionText>
          <AtmoDescContainer>
            <ImageBackground background={productImage}>
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
  isAtScreenTop: PropTypes.bool,
};
