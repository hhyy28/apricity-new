import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
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
  ImageSubContainer,
} from './styled';
import NextImage from '@components/images/next-image';

export default function CollectionComponent({ collectionText }) {
  const { value, title } = collectionText;

  return (
    <Wrapper>
      <ImageContainer>
        <ImageSubContainer>
          <NextImage src={'https://i.imgur.com/avga14y.jpeg'} fill />
        </ImageSubContainer>
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
  description: PropTypes.string,
  collectionText: PropTypes.shape({
    value: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
  }).isRequired,
  logo: PropTypes.string,
};
