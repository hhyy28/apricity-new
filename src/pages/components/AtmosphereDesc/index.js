import { Container, TextContainer, TextTitle, Text } from "./styled";
import { ATMOSPHERE_TEXT } from "./constants";

export default function AtmosphereDesc() {
  return (
    <Container>
      <TextContainer>
        <TextTitle>{ATMOSPHERE_TEXT.title}</TextTitle>
        <Text>{ATMOSPHERE_TEXT.description}</Text>
      </TextContainer>
    </Container>
  );
}
