import React from 'react'
import "./header.css"
import CTA from "./CTA.jsx"
import myself from "../../images/myself.png"
import Socials from './Socials'

const Header = () => {
  return (
    <header>
      <div className="container header_comp">
        <h5>Myself...</h5>
        <h1>Awdhesh Prasad</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA/>
        <Socials/>
        <div className="me">
          <img src={myself} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
