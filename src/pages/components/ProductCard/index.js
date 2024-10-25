import { useState } from 'react';
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
  PagginationContainer,
} from './styled';
import {
  COLLECTION_PREFIX,
  COLLECTION_NAME,
  PRODUCT_NAME,
  PRICE_LABEL,
  INITIAL_QUANTITY,
} from './constants';
import productImage from '../../../../public/productImage.jpg'; 
import BlackPagination from '../../../../public/BlackPagination.svg';

export default function ProductCard({ visibleFooter }) {
  const [quantity, setQuantity] = useState(INITIAL_QUANTITY);

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + change;
      return newQuantity > 0 ? newQuantity : 1;
    });
  };

  return (
    <Wrapper>
      <CollectionText>
        <CollectionDef>
          {COLLECTION_PREFIX}
        </CollectionDef>
        <CollectionName>
          {COLLECTION_NAME}
          <br />
          {PRODUCT_NAME}
        </CollectionName>
      </CollectionText>
      <ProductImageWrapper>
        <Image src={productImage} alt={PRODUCT_NAME} width={269} height={265} />
      </ProductImageWrapper>

      {visibleFooter && (
        <Footer>
          <PagginationContainer>
            <Image src={BlackPagination} alt={"paginationAltBlac"} />
            <Image src={BlackPagination} alt={"paginationAltBlack"} style={{ rotate: '180deg' }} />
          </PagginationContainer>
          <PriceWrapper>
            <Price>
              25 €
            </Price>
            <QuantityWrapper>
              <QuantityButton onClick={() => handleQuantityChange(-1)}>-</QuantityButton>
              <QuantityValue>{quantity}</QuantityValue>
              <QuantityButton onClick={() => handleQuantityChange(1)}>+</QuantityButton>
            </QuantityWrapper>
          </PriceWrapper>
        </Footer>
      )}
    </Wrapper>
  );
};
