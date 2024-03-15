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
           </footer>
           
        </>
    )

}

export default Footer