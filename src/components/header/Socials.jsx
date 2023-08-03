import React from 'react'
import "./header.css"

import {FiLinkedin, FiGithub} from "react-icons/fi"
const Socials = () => {
  return (
    <div className="socials">
      <a href="https://www.linkedin.com/in/awdhesh-prasad-33b323173/" target="_blank" rel="noreferrer"><FiLinkedin/></a>
      <a href="https://github.com/awdhesh-student" target="_blank" rel="noreferrer"><FiGithub/></a>
    </div>
  )
}

export default Socials
