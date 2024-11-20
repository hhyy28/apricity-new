import { createGlobalStyle } from 'styled-components';
import ScreenProvider from '../context/ScreenContext';
import textConstants from '../constants/constants';

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ScreenProvider>
        <Component {...pageProps} textConstants={textConstants} />
      </ScreenProvider>
    </>
  );
}
