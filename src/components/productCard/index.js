import { useState, useEffect } from 'react';
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
  OrderButton,
  ImageBackground,
  AtmoDescContainer,
  PaginationButtonImg,
} from './styled';
import { useScreen } from '@context/ScreenContext';
import { productImage } from '@images/index';
import { orderButton } from '@svg/index';
import { PaginationButton } from '@svg/paginationButton';

export default function ProductCard({ visibleFooter, productCard }) {
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
    const shouldShowHeaderDesc = isTabletHorizontal && visibleFooter;
    setShowHeaderDescription(shouldShowHeaderDesc);
  }, [isTabletHorizontal, visibleFooter]);

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + change;
      return newQuantity > 0 ? newQuantity : 1;
    });
  };

  return (
    <Wrapper visibleFooter={visibleFooter}>
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
          <CollectionText visibleFooter={visibleFooter}>
            <CollectionDef>{collection_prefix}</CollectionDef>
            <CollectionName>{collection_name}</CollectionName>
          </CollectionText>
          <AtmoDescContainer>
            <ImageBackground $background={productImage}>
              <OrderButton>
                <Image src={orderButton} alt="Order Button" />
              </OrderButton>
            </ImageBackground>
            {/* Uncomment if header description needed */}
            {/* {showHeaderDescription && <AtmosphereDesc />} */}
          </AtmoDescContainer>
        </>
      )}
      {visibleFooter && (
        <Footer>
          <PaginationContainer>
            <PaginationButtonImg>
              <PaginationButton fillcolor="#2B2726" />
            </PaginationButtonImg>
            <PaginationButtonImg rotate>
              <PaginationButton fillcolor="#2B2726" />
            </PaginationButtonImg>
          </PaginationContainer>
          <PriceWrapper>
            <Price>{price_label} 25 €</Price>
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
      )}
    </Wrapper>
  );
}
