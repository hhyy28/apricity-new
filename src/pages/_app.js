// Import global CSS and styled-components
import "@/styles/globals.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto-BlackItalic';
    src: url('/fonts/local/Roboto-BlackItalic.ttf') format('truetype');
    font-style: italic;
    font-weight: 900;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto-Black';
    src: url('/fonts/local/Roboto-Black.ttf') format('truetype');
    font-style: normal;
    font-weight: 900;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto-BoldItalic';
    src: url('/fonts/local/Roboto-BoldItalic.ttf') format('truetype');
    font-style: italic;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto-Bold';
    src: url('/fonts/local/Roboto-Bold.ttf') format('truetype');
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto-LightItalic';
    src: url('/fonts/local/Roboto-LightItalic.ttf') format('truetype');
    font-style: italic;
    font-weight: 300;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto-Light';
    src: url('/fonts/local/Roboto-Light.ttf') format('truetype');
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto-MediumItalic';
    src: url('/fonts/local/Roboto-MediumItalic.ttf') format('truetype');
    font-style: italic;
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto-Medium';
    src: url('/fonts/local/Roboto-Medium.ttf') format('truetype');
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto-Regular';
    src: url('/fonts/local/Roboto-Regular.ttf') format('truetype');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}