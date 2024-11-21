import {
  Wrapper,
  TopBar,
  BottomBar,
  TopBarTitle,
  TopBarText,
  BottomBarTitle,
  BottomBarText,
} from './styled';
import { constants } from './constants';

const { topBarText, topBarTitle, bottomBarTitle, bottomBarText } = constants;

export default function DemonstrationAtmosphere() {
  return (
    <Wrapper>
      <TopBar>
        <TopBarTitle>{topBarTitle}</TopBarTitle>
        <TopBarText>{topBarText}</TopBarText>
      </TopBar>
      <BottomBar>
        <BottomBarTitle>{bottomBarTitle}</BottomBarTitle>
        <BottomBarText>{bottomBarText}</BottomBarText>
      </BottomBar>
    </Wrapper>
  );
}
