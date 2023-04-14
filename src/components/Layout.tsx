import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Meta  } from './Meta'

export const Layout = ({children}: any) => {
  return (
    <>
    <Meta/>
    <Header />
    <main style={{maxWidth: "1600px"}}>{children}</main>
    <Footer/>
    </>
  )
}
