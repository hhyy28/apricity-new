import React from 'react';
import PropTypes from 'prop-types';
import { TextTitle, Text, TextWrapper, Wrapper } from './styled';

export default function AtmosphereDesc({ atmosphereText }) {
  const { title, description } = atmosphereText;

  return (
    <Wrapper>
      <TextWrapper>
        <TextTitle>{title}</TextTitle>
        <Text>{description}</Text>
      </TextWrapper>
    </Wrapper>
  );
}

AtmosphereDesc.propTypes = {
  atmosphereText: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
