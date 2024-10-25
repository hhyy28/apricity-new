import { Container, FooterContainer, OrderButton, OrderContainer, PagginationContainer, PaginationButton } from "./styled";
import Image from "next/image";
import WhitePagination from '../../../../public/WhitePagination.svg';
import Order from '../../../../public/OrderButton.svg';
import Background1 from '../../../../public/Backgr1.jpg';

export default function Demonstrations() {
  return (
    <Container background={Background1}>
      <FooterContainer>
        <OrderContainer>
          <OrderButton>
            <Image src={Order} alt={"galleryAlt"} />
          </OrderButton>
        </OrderContainer>
        <PagginationContainer>
          <Image src={WhitePagination} alt={"paginationAltBlack"} />
          <PaginationButton>1</PaginationButton>
          <PaginationButton>12</PaginationButton>
          <Image src={WhitePagination} alt={"paginationAltWhite"} style={{ rotate: '180deg' }} />
        </PagginationContainer>
      </FooterContainer>
    </Container>
  );
}
