import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehanceSquare, faFacebookSquare, faInstagramSquare, faTwitterSquare} from '@fortawesome/free-brands-svg-icons'


import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
            <div>
                <h1>Trippy</h1>
                <p>Choose your favourite destination</p>
            </div>
            <div>
                <a href="/">
                <FontAwesomeIcon  className='i' icon={faFacebookSquare}/>
                </a>
                <a href="/">
                <FontAwesomeIcon className='i'  icon={faInstagramSquare}/>
                </a>
                <a href="/">
                <FontAwesomeIcon className='i'  icon={faBehanceSquare}/>
                </a>
                <a href="/">
                <FontAwesomeIcon className='i'  icon={faTwitterSquare}/>
                </a>
            </div>
        </div>

        <div className="bottom">
        <div>
            <h4>Project</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All versions</a>
        </div>
        <div>
            <h4>Community</h4>
            <a href="/">GitHub</a>
            <a href="/">Issues</a>
            <a href="/">Project</a>
            <a href="/">Twitter</a>
        </div>
        <div>
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">Troubleshooting</a>
            <a href="/">Contact Us</a>
        </div>
        <div>
            <h4>Other</h4>
            <a href="/">Terms of Service</a>
            <a href="/">Privacy Policy</a>
            <a href="/">License</a>
        </div>
        </div>
      
    </div>
  )
}

export default Footer