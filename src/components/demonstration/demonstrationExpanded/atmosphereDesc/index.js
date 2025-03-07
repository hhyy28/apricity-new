import React from 'react';
import PropTypes from 'prop-types';
import { TextTitle, Text, TextWrapper, Wrapper } from './styled';

export default function AtmosphereDesc({ atmosphereText, collection }) {
  const { title } = atmosphereText;
  const firstCollection = collection?.[0];
  const { atmosphere } = firstCollection;

  return (
    <Wrapper>
      <TextWrapper>
        <TextTitle>{title}</TextTitle>
        <Text>{atmosphere}</Text>
      </TextWrapper>
    </Wrapper>
  );
}

AtmosphereDesc.propTypes = {
  atmosphereText: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  collection: PropTypes.array,
};
