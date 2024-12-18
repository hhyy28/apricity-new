import { 
  TextTitle,
  Text, 
  TextWrapper,
  Wrapper
} from './styled';
import { ATMOSPHERE_TEXT } from './constants';
import React from 'react';

export default function AtmosphereDesc() {
  return (
    <Wrapper>
      <TextWrapper>
        <TextTitle>{ATMOSPHERE_TEXT.title}</TextTitle>
        <Text>{ATMOSPHERE_TEXT.description}</Text>
      </TextWrapper>
    </Wrapper>
  );
}
