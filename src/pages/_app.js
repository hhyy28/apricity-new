import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ScreenProvider from '@context/ScreenContext';
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
    <>
      <GlobalStyle />
      <ScreenProvider>
        <Component {...pageProps} textConstants={textConstants} />
      </ScreenProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
