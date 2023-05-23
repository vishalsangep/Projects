import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import abtImg from '../images/about.jpg'
import './About.css'

export default function About() {
  return (
    <div>
      <Navbar/>
    <Hero 
    cName="hero-mid"
    heroImg={abtImg}
    title="About Us"
    btnclass="hide"
    />
    <div className="about-container">
      <h1>Our History</h1>
      <p>As the top-rated travel website in the world, your platform has disrupted the industry with cutting-edge technology, personalized recommendations, and exceptional customer service. Your website offers a seamless user experience that helps travelers discover, plan, and book their dream vacations with ease. With millions of satisfied customers and a strong brand reputation, you have established yourself as the leader in the travel industry.</p>

      <h1>Our Mission</h1>
      <p>"Our mission is to inspire and empower travelers worldwide by providing them with a comprehensive platform to discover, plan, and book their dream vacations. We aim to deliver exceptional customer service, personalized recommendations, and competitive pricing while promoting sustainable and responsible travel practices. Through innovation and collaboration with travel partners, we strive to create unforgettable experiences for our customers and contribute to the growth and development of the global travel industry." </p>

      <h1>Our Vision</h1>
      <p>"Our vision is to be the world's leading travel platform, connecting travelers with unforgettable experiences and contributing to the growth and sustainability of the global travel industry. We envision a world where travel is accessible, sustainable, and enriching for all, and we strive to make this a reality by providing innovative solutions and exceptional service to our customers. Through our commitment to responsible tourism and community engagement, we aim to create a positive impact on the world and inspire others to do the same."</p>

    </div>
    </div>
  )
}
