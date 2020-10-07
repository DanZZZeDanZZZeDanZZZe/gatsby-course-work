import React from 'react'
import { useState } from 'react'

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
      {showButton && (
        <button className="button" onClick={onClickHandler}>
          Копка
        </button>
      )}
      {showNav && children}
    </>
  )
}
