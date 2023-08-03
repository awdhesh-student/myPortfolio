import React from 'react'
import { BsPatchCheckFill } from "react-icons/bs"
import "./experience.css"
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Expereice</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developer</h3>
          <div className="experience__content">
            <article className="details">
              <BsPatchCheckFill className="icon"/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icon"/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icon"/>
              <div>
                <h4>React js</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>intermediate</small>
              </div>
            </article>
          </div>
        </div>
        
        <div className="expereince__backend">
          <h3>Backend Developer</h3>
          <div className="experience__content">
            <article className="details">
              <BsPatchCheckFill className="icon"/>
              <div>
                <h4>Mysql</h4>
                <small className='text-light'>intermediate</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icon"/>
              <div>
                <h4>php</h4>
                <small className='text-light'>intermediate</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icon"/>
              <div>
                <h4>Node js</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icon"/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icon"/>
              <div>
                <h4>Git and GitHub</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>

        <div className="expereince__backend">
          <h3>Programming Languages</h3>
          <div className="experience__content">
            <article className="details">
              <BsPatchCheckFill className="icon"/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>intermediate</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icon"/>
              <div>
                <h4>C++</h4>
                <small className='text-light'>intermediate</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
