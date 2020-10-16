import React from 'react'
import { useState } from 'react'
import { CSSTransition } from 'react-transition-group';

import HeaderButton from './HeaderButton'

export default function HeaderMenu({ modifier, children }) {
  const [navVisible, setNavVisible] = useState(false)

  const onClickHandler = () => {
    setNavVisible(!navVisible)
  }

  const lessThanLgScreen = modifier === 'lessThan-lg'
  const showNav = !lessThanLgScreen || (lessThanLgScreen && navVisible)
  const showButton = lessThanLgScreen

  return (
    <>
      {showButton && <HeaderButton {...{ onClickHandler, openMod: showNav }} />}
      {<CSSTransition
        in={showNav}
        classNames="animation"
        timeout={300}
        unmountOnExit
      >
        {children}
      </CSSTransition>}
    </>
  )
}
