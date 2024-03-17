import React from 'react';
import { NavLink } from "react-router-dom";


const NotFound = () => {
  return (
    <>
      <h1>404: Not Found</h1>
      <p>We're sorry. The page you are looking for does not exist or has been removed. 
      <NavLink to="/" className="not-found-link">
        Please return to the homepage.
      </NavLink>
      </p>
    </>
  )
}

export default NotFound