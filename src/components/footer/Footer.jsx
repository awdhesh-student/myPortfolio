import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer_logo'>Awdhesh Prasad</a>
      <ul className="links">
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__copyright">
        <small>&copy; Awdhesh Prasad. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
