import React from 'react'
import { Helmet } from 'react-helmet'
import "normalize.css"

import '../styles/global.css'
import Header from './header/Header'
import Main from './Main'
import MediaOptions from './MediaOptions'
// import { MediaContextProvider } from './Media'
import Page from './Page'
import Footer from './Footer'

export default function Layout({ children, title }) {
  const headerBreakpoints = [
    ['lessThan', 'lg'],
    ['greaterThanOrEqual', 'lg'],
  ]

  const mainBreakpoints = [
    ['lessThan', 'md'],
    ['at', 'md'],
    ['greaterThanOrEqual', 'lg'],
  ]

  const footerBreakpoints = [
    ['lessThan', 'md'],
    ['greaterThanOrEqual', 'md'],
  ]

  return (
    <>
      <Helmet title={title} defer={false}/>
      {/* <MediaContextProvider> */}
        <Page>
          <MediaOptions breakpoints={headerBreakpoints}>
            <Header />
          </MediaOptions>
          <MediaOptions breakpoints={mainBreakpoints}>
            <Main>
              {children}
            </Main>
          </MediaOptions>
          <MediaOptions breakpoints={footerBreakpoints}>
            <Footer />
          </MediaOptions>
        </Page>
        
      {/* </MediaContextProvider> */}
    </>
  )
}
