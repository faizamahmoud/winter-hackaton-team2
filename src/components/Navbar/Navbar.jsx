import React from "react";
import './index.css'
import navlogo from './navlogo.jpg'
import { Link } from "react-router-dom";
import {BiDonateHeart} from 'react-icons/bi'

function Navbar() {
     
    return (

        <div className="navbar">
            {/* <div className='left-nav'> */}
            <img className='logo' src={navlogo} alt='lean-on-me'></img>
            <p className='nav-title'><bold>LEAN ON ME</bold></p>
            {/* </div> */}
            <div className='nav-links'>
                <ul>
                    <li><Link to="#Home">HOME</Link></li>
                    <li><Link to="#Abountus">ABOUT US</Link></li>
                    <li><Link to="#Volunteer">VOLUNTEER</Link></li>
                    <li><Link to="#Locations">LOCATIONS</Link></li>
                    <li><Link to="#Contact">CONTACT US</Link></li>

                </ul>
            </div>
            <button className='btn-donate'><span id='donate-icon'><BiDonateHeart /></span>DONATE</button>
        </div>

    );
}

export default Navbar;




// Notes

