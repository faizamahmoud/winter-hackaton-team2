import React from "react";
import './index.css'
import navlogo from './navlogo.jpg'
import { Link } from "react-router-dom";
import { BiDonateHeart } from 'react-icons/bi'

function Navbar() {

    return (


        <div className="container-fluid col-12 navbar navbar-expand-lg sticky-top">
            {/* <div className='container-fluid d-flex align-items-center justify-content-between'> */}
            {/* <nav class="container-xxl bd-gutter flex-wrap flex-lg-nowrap" aria-label="Main navigation"> */}
               {/* <div className='nav-text'> */}
               <nav className='container-fluid col-10 d-flex align-items-center justify-content-between'>
                <ul className='left-nav col-2'>
                    <li><Link to='/'><img className='logo' src={navlogo} alt='lean-on-me'></img></Link></li>
                    <li><Link to='/'> <p className='nav-title mt-2'><bold>LEAN ON ME</bold></p></Link></li>
                </ul>
               
                <div className='nav-links col-8'>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="#Abountus">ABOUT US</Link></li>
                        <li><Link to="#Volunteer">VOLUNTEER</Link></li>
                        <li><Link to="#Locations">LOCATIONS</Link></li>
                        <li><Link to="#Contact">CONTACT US</Link></li>

                    </ul>
                </div>
                <button className='btn-donate'><span id='donate-icon'><BiDonateHeart /></span>DONATE</button>

            </nav>
</div>

        // </div>

    );
}

export default Navbar;




