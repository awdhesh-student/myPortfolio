import React, { useState } from 'react'
import "./navbar.css"
import {FaHome} from "react-icons/fa"
import {SiAboutdotme} from "react-icons/si"
import {MdOutlineCastForEducation} from "react-icons/md"
import {AiOutlineProject} from "react-icons/ai"
import {IoMdContact} from "react-icons/io"


const Navbar = () => {
  const [activeIcon, setActiveIcon] = useState("#")
  return (
    <div>
      <nav>
        <a href="/#" onClick={()=>setActiveIcon("#")} className={activeIcon === "#" ? "active" : " "}><FaHome className='tooltip'/></a>
        <a href="#about" onClick={()=>setActiveIcon("#about")} className={activeIcon === "#about" ? "active" : " "}><SiAboutdotme/></a>
        <a href="#experience" onClick={()=>setActiveIcon("#experience")} className={activeIcon === "#experience" ? "active" : ""}><MdOutlineCastForEducation/></a>
        <a href="#projects" onClick={()=>setActiveIcon("#projects")} className={activeIcon === "#projects" ? "active" : ""}><AiOutlineProject/></a>
        <a href="#contact" onClick={()=>setActiveIcon("#contact")} className={activeIcon === "#contact" ? "active" : ""}><IoMdContact/></a>
      </nav>
    </div>
  )
}

export default Navbar
