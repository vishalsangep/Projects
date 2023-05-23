import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import abtImg from '../images/service.jpg'
import Trip from './Trip'

export default function Service() {
  return (
    <div>
         <Navbar/>
    <Hero 
    cName="hero-mid"
    heroImg={abtImg}
    title="Service"
    btnclass="hide"
    />
    <Trip/>
    </div>
  )
}
