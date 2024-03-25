import React from 'react';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
           <footer>
            &copy; 2024 Perfume Web Application | Created by Chantel Carter         
            <NavLink to="/aboutus" className="footer-link">
                About Us
            </NavLink>|
            <NavLink to="/contactus" className="footer-link">
                Contact Us
            </NavLink>
            <p>
              All Rights Reserved - do not copy anything without prior written permission. Please read the 
                <NavLink to="/terms-of-service" className="footer-link">
                    Terms of Service
                </NavLink> and 
                <NavLink to="/privacy-policy" className="footer-link">
                    Privacy policy
                </NavLink>.  
            </p>
           </footer>
           
        </>
    )

}

export default Footer