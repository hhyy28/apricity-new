import { 
  TextTitle,
  Text, 
  TextWrapper 
} from './styled';
import { ATMOSPHERE_TEXT } from './constants';

export default function AtmosphereDesc() {
  return (
    <TextWrapper>
      <TextTitle>{ATMOSPHERE_TEXT.title}</TextTitle>
      <Text>{ATMOSPHERE_TEXT.description}</Text>
    </TextWrapper>
  );
}
