import React from 'react'
import "./about.css"
import ME from "../../images/fullImage.jpg"
import { FaAward } from "react-icons/fa"
import { VscProject } from "react-icons/vsc"

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="myself" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='icon' />
              <h5>Experience</h5>
              <small>7 months as frontend developer</small>
            </article>
            <article className="about__card">
              <VscProject className='icon' />
              <h5>Projects</h5>
              <small>have basic projects</small>
            </article>
          </div>
          <p>Had a well experienced and knowledge about solving the real life problems and very enthusiastic to
            learn and explore new things which would encourage me to bring my best and can be helpful for me
            as well as for an organization to whom I would work.</p>
          <a href="#contact" className='btn btn-primary'>Lets`s talk!!</a>
        </div>
      </div>
    </section>
  )
}

export default About
