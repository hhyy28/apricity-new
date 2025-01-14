import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { description } from '@images/index';
import { logo } from '@svg/index';
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


export default function CollectionComponent({ collectionText }) {
  const { value, title } = collectionText;

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

CollectionComponent.propTypes = {
  description: PropTypes.string.isRequired,
  collectionText: PropTypes.shape({
    value: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  logo: PropTypes.string.isRequired,
};
