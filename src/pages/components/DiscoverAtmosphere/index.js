import { Container, TextContainer, TextTitle, Text, TopBar, BottomBar, TopBarTitle, TopBarText, BottomBarTitle, BottomBarText } from "./styled";
import { constants } from "./constants";

const {
  topBarText,
  topBarTitle,
  bottomBarTitle,
  bottomBarText
} = constants

export default function DemonstrationAtmosphere() {
  return (
    <Container>
      <TopBar>
        <TopBarTitle>{topBarTitle}</TopBarTitle>
        <TopBarText>{topBarText}</TopBarText>
      </TopBar>
      <BottomBar>
        <BottomBarTitle>{bottomBarTitle}</BottomBarTitle>
        <BottomBarText>{bottomBarText}</BottomBarText>
      </BottomBar>
    </Container>
  );
}
