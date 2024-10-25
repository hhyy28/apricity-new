import Image from 'next/image';
import logo from '../../../../public/APRICITY LOGO 1.svg';
import Plus from '../../../../public/plus-hamburger.svg';
import Gallery from '../../../../public/Gallery.jpg';
import FavouriteImg from '../../../../public/favourite-button.svg';
import CartImg from '../../../../public/cart-button.svg';
import WhitePagination from '../../../../public/WhitePagination.svg';
import BlackPagination from '../../../../public/BlackPagination.svg';
import Order from '../../../../public/OrderButton.svg';
import { TEXT_CONSTANTS } from './constants'; 

import { 
  Container, 
  LogoContainer, 
  LogoWrapper, 
  Icon, 
  LogoSubText, 
  HeaderBar, 
  HeaderButtonContainer, 
  Favourite,
  Cart,
  MenuContainer,
  FooterContainer,
  Option,
  OptionMenu,
  CollectionName,
  GalleryImg,
  OrderContainer,
  PagginationContainer,
  NotebookText,
  OrderButton,
  CollectionContainer,
  CollectionDef,
  PaginationButton
} from './styled';

const { 
  logoAlt, 
  logoSubText, 
  favouriteAlt, 
  cartAlt, 
  refineOption, 
  sortOption, 
  galleryAlt, 
  collectionLabel, 
  collectionName, 
  notebookLabel, 
  orderButtonLabel, 
  paginationAltBlack, 
  paginationAltWhite 
} = TEXT_CONSTANTS;

export default function HomePage() {
  return (
    <Container>
      <HeaderBar>
        <Icon>
          <Image src={Plus} alt="Plus" />
        </Icon>
        <LogoContainer>
          <LogoWrapper>
            <Image src={logo} alt={logoAlt} width={120} height={17.273} />
          </LogoWrapper>
          <LogoSubText>{logoSubText}</LogoSubText>
        </LogoContainer>
        <HeaderButtonContainer>
          <Favourite>
            <Image src={FavouriteImg} alt={favouriteAlt} />
          </Favourite>
          <Cart>
            <Image src={CartImg} alt={cartAlt} />
          </Cart>
        </HeaderButtonContainer>
      </HeaderBar>
      <MenuContainer>
        <OptionMenu>
          <Option>{refineOption}</Option>
          <Option>{sortOption}</Option>
        </OptionMenu>
        <GalleryImg>
          <Image src={Gallery} alt={galleryAlt} layout="responsive" />
        </GalleryImg>
        <CollectionContainer>
          <CollectionDef>
            {collectionLabel} 
          </CollectionDef>
          <CollectionName>
            {collectionName}
          </CollectionName>
        </CollectionContainer>
      </MenuContainer>
      <FooterContainer>
        <OrderContainer>
          <NotebookText>
            {notebookLabel}
          </NotebookText>
          <OrderButton>
            <Image src={Order} alt={galleryAlt}/>
          </OrderButton>
        </OrderContainer>
        <PagginationContainer>
          <Image src={BlackPagination} alt={paginationAltBlack} />
          <PaginationButton>1</PaginationButton>
          <PaginationButton>12</PaginationButton>
          <Image src={WhitePagination} alt={paginationAltWhite} style={{ rotate: '180deg' }} />
        </PagginationContainer>
      </FooterContainer>
    </Container>
  );
}
