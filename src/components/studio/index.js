import {
  CollectionText,
  Wrapper,
  ImageContainer,
  InfoWrapper,
  ItalicText,
  LogoWrapper,
  LogoWrapperImg,
  TextContainer,
  TitleContainer,
  TitleText,
} from './styled';
import { description } from '@images/index';
import Image from 'next/image';
import { TEXT_CONSTANTS } from './constants';
import { logo } from '@svg/index';

const { 
  value, 
  title
} = TEXT_CONSTANTS;

export default function CollectionComponent() {
  return (
    <Wrapper>
      <ImageContainer>
        <Image src={description} alt="Gallery Image" />
      </ImageContainer>
      <InfoWrapper>
        <TitleContainer>
          <LogoWrapper>
            <LogoWrapperImg>
              <Image src={logo} alt="logo_alt" />
            </LogoWrapperImg>
            <TitleText>
              <ItalicText>{`the   `}</ItalicText>
              {title}
            </TitleText>
          </LogoWrapper>
        </TitleContainer>
        <TextContainer>
          {value.map((paragraph, index) => (
            <CollectionText key={index}>{paragraph}</CollectionText>
          ))}
        </TextContainer>
      </InfoWrapper>
    </Wrapper>
  );
}
