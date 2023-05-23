import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import abtImg from '../images/contact.jpg' 
import './Contact.css'
export default function Contact() {
  return (
    <div>
      <Navbar/>
    <Hero 
    cName="hero-mid"
    heroImg={abtImg}
    title="Contact Us"
    btnclass="hide"
    />
   <div className="form-container">
    <h1>Stay in Touch!</h1>
    <form >
      <input type="text" placeholder='Name'/>
      <input type="text" placeholder='Email'/>
      <input type="text" placeholder='Subject'/>
      <textarea placeholder='Message' rows="4"></textarea>
      <button>Send Message</button>
    </form>
   </div>

    </div>
  )
}
