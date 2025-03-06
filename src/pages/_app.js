import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ScreenProvider from '@context/screenContext';
import { ThemeProvider } from '@context/themeContext';
import textConstants from '@constants/constants';
import PropTypes from 'prop-types';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <ScreenProvider>
        <Component {...pageProps} textConstants={textConstants} />
      </ScreenProvider>
    </ThemeProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
