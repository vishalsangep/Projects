import './Trip.css'
import Img from '../images/trip01.jpg'
import Img2 from '../images/trip02.jpg'
import Img3 from '../images/trip03.jpg'
import React from 'react'
import TripData from './TripData'

export default function Trip() {
  return (
    <div >
      <h1>Recent Trips</h1>
      <p>You can discover destinations using Google Maps</p>
      <div className="trip">
    <div className="tripcard">
        <TripData
        image={Img}
        heading="Hoi An,Vietnam"
        text="Hoi An is a place where the bold march of progress peters into a leisurely amble. In this one-time trading port, the Thu Bon River meanders past crumbling shop houses and weathered pagodas, while sampans come and go from the old ferry quay. Outside the Old Town, two-lane roads slice through waving rice fields and emerge at a frothy coastline. Stay a couple of days, and Hoi An's easygoing beauty and lantern-lit nights may leave you hopelessly beguiled."

        />

        <TripData
        image={Img2}
        heading="Bali,Indonesia"
        text="Bali, Indonesia’s most famous island, is located to the west of Java in the Lesser Sunda Islands. It is world-renowned for its scenic rice terraces, fragrant cuisine, stunning beaches and a galore of culture and tradition. With its elaborate temples, endless coastline, some of the world's best coral reefs, waterfalls and retreats, Bali combines leisure and adventure impeccably. A dizzying combination of spiritual awakening and hard-partying all into one.  
        "        
        />

        <TripData
        image={Img3}
        heading="Seoul,South Korea"
        text="From modern skyscrapers and neon lights to Buddhist temples, palaces and pagodas, Seoul is a fascinating mix of old and new. Take it all in from the N Seoul Tower, built atop a peak in Namsan Park. The teahouses and shops of Insadong give you a taste of Korean flavour, which you can further experience with a visit to the grounds and museums of Gyeongbokgung."        
        />
    </div>
    </div>
    </div>
  )
}
