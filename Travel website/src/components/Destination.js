import React from 'react'
import Img1 from '../images/phutek1.jpg'
import Img2 from '../images/phutek2.jpg'
import Img3 from '../images/china1.jpg'
import Img4 from '../images/china2.jpg'
import './Destination.css'
import DestinationData from './DestinationData'

const Destination = () => {
  return (
    <div className='destination'>
        <h1>Popular Destination</h1>
        <p>Tours which give  you the opportunity to explore yourself</p>

        {/* <div className="first-des">
            <div className="des-text">
                <h2>Phuket,Thailand</h2>
                <p>Phuket province is located in southern Thailand. It is the biggest Island of Thailand and sits on the Andaman sea. The nearest province to the north is Phang-nga and the nearest provinces to the east are Phang-nga and Krabi.
Phuket has a large Chinese influence, so you will see many Chinese shrines and Chinese Restaurants around the City. A Chinese Vegetarian Festival is held there every year. While the Chinese community is quite big, there are many other ethnicities bringing all their traditions and festivals from all over the world to Phuket.
. Laem Phromthep viewpoint is said to feature the most beautiful sunsets in Thailand.</p>
            </div>
            <div className="image">
                <img src={Img1} alt="img" />
                <img src={Img2} alt="img" />
            </div>
        </div> */}
        <DestinationData
        className="first-des"
        heading="Phuket,Thailand"
        text="Phuket province is located in southern Thailand. It is the biggest Island of Thailand and sits on the Andaman sea. The nearest province to the north is Phang-nga and the nearest provinces to the east are Phang-nga and Krabi. Phuket has a large Chinese influence, so you will see many Chinese shrines and Chinese Restaurants around the City. A Chinese Vegetarian Festival is held there every year. While the Chinese community is quite big, there are many other ethnicities bringing all their traditions and festivals from all over the world to Phuket. . Laem Phromthep viewpoint is said to feature the most beautiful sunsets in Thailand."
        img1={Img1}
        img2={Img2}
        />

        <DestinationData
        className="first-des-reverse"
        heading="Beijing,China"
        text="Welcome to a capital city whose story goes back at least 3,000 years. In Beijing, you'll find a wealth of history, both ancient (the Hall of Preserving Harmony, Summer Palace, Forbidden City) and more recent (Chairman Mao Memorial Hall, Tiananmen Square). For the best market experience, choose the Dirt Market over the touristy Silk Market. A visit to the Great Wall, the longest manmade structure in the world, is absolutely essential."

        img1={Img3}
        img2={Img4}
        />
    </div>
  )
}

export default Destination
