import Home from '@components/home';
import CollectionComponent from '@components/studio';
import Demonstrations from '@components/demonstration';
import CSSGrid, { gridTheme } from 'src/components/bootstrap-grid';

export default function HomePage({ homePage }) {
  const { home, demonstration } = homePage;
  return (
    <>
      <CSSGrid gridTheme={gridTheme}>
        <Home home={home} />
        <Demonstrations demonstration={demonstration} />
        <CollectionComponent />
      </CSSGrid>
    </>
  );
}
