import React from "react";
import './index.css'
import navlogo from './navlogo.jpg'
import { Link } from "react-router-dom";
import { BiDonateHeart } from 'react-icons/bi'

function Navbar() {

    return (
        <div className="container-fluid col-12 navbar navbar-expand-lg sticky-top topnav" id="myTopnav">
               <nav className='container-fluid col-10 d-flex align-items-center justify-content-between'>
                <div className='left-nav col-3'>

                    <span><Link to="/"><img className='logo' src={navlogo} alt='lean-on-me'></img></Link></span>
                    <span className='nav-title mt-2'><Link to="/">LEAN ON ME</Link></span>

                </div>
               
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




