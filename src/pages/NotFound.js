import React from 'react';
import { NavLink } from "react-router-dom";


const NotFound = () => {
  return (
    <>
      <div className='notfound-container'>
        <h1>404</h1>
        <p>We're sorry! The page you are looking for does not exist or has been removed.</p>
          <NavLink to="/" className="not-found-link">
            Please return to the homepage
          </NavLink>
      </div>
      
    </>
  )
}

export default NotFound