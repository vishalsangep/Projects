import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import homeImg from '../images/home.jpg'
import Destination from './Destination'
import Trip from './Trip'
import Footer from './Footer'
export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero 
    cName="hero"
    heroImg={homeImg}
    title="Your Journey Your Story"
    text="Choose Your Escape"
    buttontext="Travel plan"
    url="/"
    btnclass="button"
    />
    <Destination/>
    <Trip/>
    
    </>
  )
}
