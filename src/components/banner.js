import React from 'react'
import { ReactComponent as RightArrow} from '../assets/arrow-right.svg'

const Banner = () => {
  return (
    <section className='main'>
      <div className="container">
        <div className="row">
          <h2>
            {/* 
              the reason why we have laid out like this is because we are going
              to use a sort of overlay effect to where the animation of lines
              can sort of fade in without needing to change the opacity.
              there is like a mask layer in front of it that gives it that effect of being hidden behind something
             */}
            <div className="line"> 
              <span>Creating unique brands is</span>
            </div>
            <div className="line">
              <span>what we do.</span>
            </div>
          </h2>
          <div className="btn-row">
            {/* we can put the svg with an img tag but we loose styling capabilities */}
            <a href="/">
            More about us <RightArrow />
            </a> 
          </div>
        </div>
      </div>
    </section>
  )
  
}

export default Banner
