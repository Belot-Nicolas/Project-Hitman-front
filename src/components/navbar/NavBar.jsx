import React from 'react';
import {NavLink} from 'react-router-dom'
import './NavBar.css'

import LogoHitman from '../../assets/LogoHitman.png'
import Img47 from '../../assets/Img47.png'

const NavBar = () => {
  return ( 
    
    <div className='NavBar'>
      <div className="title-hitman">
      <span>H I T M A N</span>
      </div>

      <NavLink to='/'>
        <img className='logo-hitman' src={LogoHitman} alt="logo-hitman" />
      </NavLink>

      {/* <div className='account-and-contact-contener'> */}

      <div className='account'>
        <NavLink to='/account' style={{ textDecoration: 'none' }}>
        <span >C O M P T E</span>
        </NavLink>
      </div>

      <div className='contact'>
        <NavLink to='/contact' style={{ textDecoration: 'none' }} >
        <span>C O N T A C T</span>
        </NavLink>
      </div>
      
      {/* </div> */}
      </div>
)};

export default NavBar;
