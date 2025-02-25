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
  ImageSubContainer,
} from './styled';
import NextImage from '@components/images/next-image';

export default function CollectionComponent({ collectionText }) {
  const { value, title } = collectionText;

  return (
    <Wrapper>
      <ImageContainer>
        <ImageSubContainer>
          <NextImage src={"https://m.media-amazon.com/images/I/81BmxjMuvZL.__AC_SX300_SY300_QL70_FMwebp_.jpg"} fill/>
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
