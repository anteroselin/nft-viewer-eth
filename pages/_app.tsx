import '../styles/globals.css'
import React from "react";
import type { AppProps } from 'next/app'
import store from '../lib/store';
import { Provider as ReduxProvider } from "react-redux";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    </React.Fragment>
  )
}
