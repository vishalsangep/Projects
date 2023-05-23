import './Navbar.css';
import { Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAddressBook, faTimes,faBars, faBriefcase, faCircleInfo, faHouseUser} from '@fortawesome/free-solid-svg-icons'

import React from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  state = {clicked:false};
  handleClick =() =>{
    this.setState({clicked: !this.state.clicked})
  }
  render(){
  return (
    <nav className='NavbarItems'>
        <h1 className='navbar-logo'>Trippy</h1>

        <div className="menu-icons" >
          <FontAwesomeIcon className='menu-icons-bars' onClick={this.handleClick} icon={this.state.clicked ? faTimes : faBars}/>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>

            <li >
             <Link className='nav-links' to="/">   
            <FontAwesomeIcon className='nav-items-icons' icon={faHouseUser} /> Home</Link>
            </li>
            <li >
             <Link  className='nav-links' to="/about">   
            <FontAwesomeIcon className='nav-items-icons' icon={faCircleInfo} /> About</Link>
            </li>
            <li >
             <Link className='nav-links' to="/service">   
            <FontAwesomeIcon className='nav-items-icons' icon={faBriefcase} /> Service</Link>
            </li>
            <li>
             <Link  className='nav-links' to="/contact">   
            <FontAwesomeIcon className='nav-items-icons' icon={faAddressBook} /> Contact</Link>
            </li>
            <li ><Link className='nav-links-mobile' to="/signup">Sign up</Link></li>
            <button>Sign up</button>
        </ul>
    </nav>
  )
  }
}
