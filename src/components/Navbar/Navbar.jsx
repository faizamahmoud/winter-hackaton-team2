import React from "react";
import './index.css'
import navlogo from './navlogo.jpg'
import { Link } from "react-router-dom";
import { BiDonateHeart } from 'react-icons/bi'

function Navbar() {

    return (


        <div className="container-fluid col-12 navbar navbar-expand-lg navbar-dark bd-navbar sticky-top">
            {/* <nav class="container-xxl bd-gutter flex-wrap flex-lg-nowrap" aria-label="Main navigation"> */}
               
                <ul className='left-nav col-2'>
                    <li><img className='logo' src={navlogo} alt='lean-on-me'></img></li>
                    <li> <p className='nav-title'><bold>LEAN ON ME</bold></p></li>
                </ul>
               
                <div className='nav-links col-6'>
                    <ul>
                        <li><Link to="#Home">HOME</Link></li>
                        <li><Link to="#Abountus">ABOUT US</Link></li>
                        <li><Link to="#Volunteer">VOLUNTEER</Link></li>
                        <li><Link to="#Locations">LOCATIONS</Link></li>
                        <li><Link to="#Contact">CONTACT US</Link></li>

                    </ul>
                </div>
                <button className='btn-donate'><span id='donate-icon'><BiDonateHeart /></span>DONATE</button>
            {/* </nav> */}

        </div>

    );
}

export default Navbar;




// Notes

