import React from 'react'

export default function Slider({ images }) {
  const backOnClick = () => {
    console.log('b-click')
  }

  const forwardOnClick = () => {
    console.log('f-click')
  }
  return (
    <>
      <button 
        className="button-back" 
        type="button" 
        onClick={()=> backOnClick()}
      >
      </button>
      <div className="slider">
        <img src=""/>
      </div>
      <button className="button-forward" type="button">
      </button>
    </>
  )
}