import React from 'react';
import {
  Wrapper,
  FooterContainer,
  OrderButton,
  OrderContainer,
  PaginationContainer,
  PaginationButtonNumbers,
  PaginationButtonImg,
} from './styled';
import Background1 from '@images/background1.jpg';
import Image from 'next/image';
import { orderButton } from '@svg/index';
import { PaginationButton } from '@svg/paginationButton';

export default function DemonstrationComponent() {
  return (
    <Wrapper background={Background1}>
      <FooterContainer>
        <OrderContainer>
          <OrderButton>
            <Image src={orderButton} alt="galleryAlt" />
          </OrderButton>
        </OrderContainer>
        <PaginationContainer>
          <PaginationButtonImg>
            <PaginationButton fillcolor="#DFDDD8" alt="Pagination Arrow" />
          </PaginationButtonImg>
          <PaginationButtonNumbers>1</PaginationButtonNumbers>
          <PaginationButtonNumbers>12</PaginationButtonNumbers>
          <PaginationButtonImg rotate>
            <PaginationButton fillcolor="#DFDDD8" alt="Pagination Arrow" />
          </PaginationButtonImg>
        </PaginationContainer>
      </FooterContainer>
    </Wrapper>
  );
}
