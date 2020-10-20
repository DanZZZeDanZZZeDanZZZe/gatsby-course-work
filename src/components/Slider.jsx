import React, { useState } from 'react'

export default function Slider({ imagesSrc }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const backOnClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(imagesSrc.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const forwardOnClick = () => {
    if (currentIndex === imagesSrc.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <>
      <button 
        className="button-back" 
        type="button" 
        onClick={backOnClick}
      >
      </button>
        <img className="slider" src={imagesSrc[currentIndex]}/>
      <button 
        className="button-forward" 
        type="button"
        onClick={forwardOnClick}
      >
      </button>
    </>
  )
}