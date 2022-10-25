import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react';

import { NextUIProvider } from '@nextui-org/react';
import AppContext from '../components/appContext/AppContext'
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false);
  const [ user, setUser ] = useState<object | any>({})
  return (
    <NextUIProvider>
      <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContext.Provider>
    </NextUIProvider>
  )
}

export default MyApp
