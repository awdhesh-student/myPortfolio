import React from 'react'
import p1 from "../../images/website.png"
import p2 from "../../images/weather.png"
import p3 from '../../images/bookadoc.jpg';

const Projects = () => {
   const data = [
      {
         id: 3,
         image: p3,
         title: "Book a Doctor",
         desc: `Booking a doctor appointment has never been easier. With my convenient online platform, you can quickly and effortlessly schedule your appointments from the comfort of your own home. This app is totally build on latest MERN framework.
      This user-friendly interface allows you to browse through a wide range of doctors and healthcare providers, making it simple to find the perfect match for your needs.`,
         github: "https://github.com/awdhesh-student",
         demo: "https://drive.google.com/file/d/1wsPyhAY9dU5fAfz4hN_-gbBBmAiPY9OA/view?usp=drive_link",
      }, {

         id: 2,
         image: p2,
         title: "Weather App",
         desc: `This is the Weather App designed by the help of HTML, CSS, JavaScript and Weather API by Rapid Api . 
         It show all the information about the particular place like min and max temperatures, humidity info, etc entered by the user.`,
         github: "https://github.com/awdhesh-student",
         demo: "https://awdhesh-student.github.io/weather-app",

      },
      {
         id: 1,
         image: p1,
         title: "American Muscle Car",
         desc: "designed a user friendly static website on American Muscle Car using HTML and CSS.",
         github: "https://github.com/awdhesh-student",
         demo: "https://awdhesh-student.github.io/project-2",
      },]
   return (
      <section id='projects'>
         <h5>My Recent Works</h5>
         <h2>Projects</h2>

         <div className="container projects__container">
            {
               data.map((e, id) => {
                  return (
                     <article key={id} className='project__item'>
                        <div className="image">
                           <img src={e.image} alt="" />
                        </div>
                        <h3>{e.title}</h3>
                        <p>{e.desc}</p>
                        <div className="cta">
                           <a rel="noreferrer" href={e.github} className='btn btn-primary' target='_blank'>GitHub</a>
                           <a rel="noreferrer" href={e.demo} className='btn btn-primary' target='_blank'>Live</a>
                        </div>
                     </article>
                  )
               })
            }
         </div>
      </section>
   )
}

export default Projects
