import React from 'react'
import { Media } from './Media'

export default function MediaOptions({ children, breakpoints }) {
  return (
    <>
      {breakpoints.map(([property, value], index) => (
        <Media {...{ [property]: value, key: index }}>
          {React.cloneElement(children, { modifier: `${property}-${value}` })}
        </Media>
      ))}
    </>
  )
}
