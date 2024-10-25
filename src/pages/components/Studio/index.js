import { CollectionText, Container, ImageContainer, ItalicText, LogoWrapper, TextContainer, TitleContainer, TitleText } from "./styled";
import gal31 from '../../../../public/gal31.png';
import Image from "next/image";
import { TEXT_CONSTANTS } from './constants'; 
import logo from '../../../../public/APRICITY LOGO 1.svg';

const { value, title, logoAlt } = TEXT_CONSTANTS;

export default function CollectionPage() {
  return (
    <Container>
      <ImageContainer>
        <Image src={gal31} alt="Gallery Image"/>
      </ImageContainer>
      <TitleContainer>
        <LogoWrapper>
          <Image src={logo} alt={logoAlt} width={120} height={17.273} />
          <TitleText>
            <ItalicText>the </ItalicText>
            {title}
          </TitleText>
        </LogoWrapper>
      </TitleContainer>
      <TextContainer>
        {value.map((paragraph, index) => (
          <CollectionText key={index}>
            {paragraph}
          </CollectionText>
        ))}
      </TextContainer>
    </Container>
  );
}
