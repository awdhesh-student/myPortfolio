import React from 'react'
import CV from "../../images/Resume.pdf"
const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} className="btn" download>Download CV</a>
      <a href="#contact" className="btn btn-primary" >Can we Talk!!</a>
    </div>
  )
}

export default CTA
