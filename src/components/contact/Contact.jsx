import React, { useRef } from 'react'
import "./contact.css"
import { MdEmail } from "react-icons/md"
import { BsWhatsapp } from "react-icons/bs"

import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ls4u8qh', 'template_jfccx1w', form.current, 'hO9Allkdi7bbrz78A')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      alert("Message sent!!")
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="conatct__options">
          <article className="contact__option">
            <MdEmail className="icons" />
            <h4>Email</h4>
            <h5>awdheshp145@gmail.com</h5>
            <a href="mailto:awdheshp145@gmail.com" target="_blank
            ">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="icons" />
            <h4>Whatsapp or Call</h4>
            <h5>+91 6264276274</h5>
            <a href="https://api.whatsapp.com/send?phone=+916264276274" target="_blank
            ">WhatsApp it</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Enter Your Full Name' required />
          <input type="email" name='email' placeholder='enter your email' required />
          <textarea name="message" placeholder="enter your message" rows="8"></textarea>
          <button type='submit' className='btn btn-primary' required >Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact
