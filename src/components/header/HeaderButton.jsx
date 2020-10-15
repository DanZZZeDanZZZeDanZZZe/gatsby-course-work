import React from 'react'

import menuImage from '../../../static/menu.svg'
import menuOpenImage from '../../../static/menu_open.svg'

export default function HeaderButton({ onClickHandler, openMod }) {
  return (
    <button className="button" onClick={onClickHandler}>
      <img
        className="icon"
        src={openMod ? menuOpenImage : menuImage}
        alt="menu-icon"
      />
    </button>
  )
}
