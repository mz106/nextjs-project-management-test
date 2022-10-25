import React, { PropsWithChildren } from 'react'

import Header from '../header/Header'
import Footer from '../footer/Footer'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
  )
}

export default Layout