import React from 'react'
import { useState } from 'react'

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
      {showNav && children}
    </>
  )
}
