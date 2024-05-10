import React from 'react';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
           <footer>
            <div className='footer-contents'>
                &copy; 2024 Perfume Web Application | Created by Chantel Carter         
                <NavLink to="/aboutus" className="footer-link">
                    About Us
                </NavLink>|
                <NavLink to="/contactus" className="footer-link">
                    Contact Us
                </NavLink>
                <p>
                All Rights Reserved - do not copy anything without prior written permission. 
                </p>
            </div>
           </footer>
        </>
    )
}

export default Footer