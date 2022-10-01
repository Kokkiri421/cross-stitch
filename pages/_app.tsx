import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
);

export default MyApp;