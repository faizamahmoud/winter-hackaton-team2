import React from "react";
import './index.css'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

import { Link } from "react-router-dom";


function Footer() {
    return (


        <div className="footer">
            <div className='footer-icons'>
                <ul>
                    <li><Link to="#"><FaFacebook/></Link></li>
                    <li><Link to="#"><FaInstagram /></Link></li>
                    <li><Link to="#"><FaTwitter/></Link></li>
                </ul>

            </div>
            <div className='footer-nav'>
                <ul>
                    <li><Link to="#Volunteer">VOLUNTEER</Link></li>
                    <li><Link to="#Locations">LOCATIONS</Link></li>
                    <li><Link to="#Contact">CONTACT US</Link></li>

                </ul>
            </div>
            <span>@ Copywrite 2022. All Rights Reserved. Powered by GA Team 2</span>
        </div>

    );
}

export default Footer;




// Notes
//! footer-nav links correct
//*npm install react-icons --save