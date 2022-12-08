import React from "react";
import './index.css'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

import { Link } from "react-router-dom";


function Footer() {
    return (


        <div className="footer ">
            <div className='footer-text d-flex ml-5'>
                <div className='footer-icons'>
                
                        <span className="p-2"><Link to="#"><FaFacebook/></Link></span>
                        <span className="p-2"><Link to="#"><FaInstagram /></Link></span>
                        <span className="p-2"><Link to="#"><FaTwitter/></Link></span>
                
                </div>
                <div className='footer-nav mr-5'>
                    
                        <span className="p-2"><Link to="#Volunteer">VOLUNTEER</Link></span>
                        <span className="p-2"><Link to="#Locations">LOCATIONS</Link></span>
                        <span className="p-2"><Link to="#Contact">CONTACT US</Link></span>

                </div>
                <div className='text-end'>@ Copyright 2022. All Rights Reserved. Powered by GA Team 2</div>
            </div>
        </div>

    );
}

export default Footer;




// Notes
//! footer-nav links correct
//*npm install react-icons --save