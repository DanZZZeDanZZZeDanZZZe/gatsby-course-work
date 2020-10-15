import React from 'react'
import { Helmet } from 'react-helmet'
import "normalize.css"

import Header from './header/Header'
import Main from './Main'
import MediaOptions from './MediaOptions'
import { MediaContextProvider } from './Media'
import Page from './Page'
import Footer from './Footer'

export default function Layout({ children, title }) {
  const headerBreakpoints = [
    ['lessThan', 'lg'],
    ['greaterThanOrEqual', 'lg'],
  ]

  const footerBreakpoints = [
    ['lessThan', 'md'],
    ['greaterThanOrEqual', 'md'],
  ]

  return (
    <>
      <Helmet title={title} defer={false}/>
      <MediaContextProvider>
        <Page>
          <MediaOptions breakpoints={headerBreakpoints}>
            <Header />
          </MediaOptions>
          <Main>
            {children}
          </Main>
          <MediaOptions breakpoints={footerBreakpoints}>
            <Footer />
          </MediaOptions>
        </Page>
        
      </MediaContextProvider>
    </>
  )
}
