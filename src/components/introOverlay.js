import React from 'react'

const IntroOverlay = () => {
  return (
    // we can use and empty fragment to get rid of the default div
    <> 
      <div className="intro-overlay">
        <div className="top">
          <div className="overlay-top"></div>
          <div className="overlay-top"></div>
          <div className="overlay-top"></div>
        </div>
        <div className="bottom">
          <div className="overlay-bottom"></div>
          <div className="overlay-bottom"></div>
          <div className="overlay-bottom"></div>
        </div>
      </div>
    </>
  )
}

export default IntroOverlay
