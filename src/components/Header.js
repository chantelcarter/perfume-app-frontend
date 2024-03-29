import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink, useNavigate } from "react-router-dom"
import logo from "../assets/perfume-logo.png"

const Header = ({currentUser, logout}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    logout()
    navigate("/")
  }
  return (
    <>
      <Nav className="navbar">
      <NavLink to="/">
          <img className="logo"
            alt="logo"
            src={logo}
          />
        </NavLink>
        <NavItem>
          <NavLink to="/" className="nav-link">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/perfumeindex" className="nav-link">View Perfumes</NavLink>
        </NavItem>
        {currentUser && (
          <>
            <NavItem>
              <NavLink to="/myperfumes" className="nav-link">My Collection</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/perfumenew" className="nav-link">Create Perfume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" onClick={handleClick}>Log Out</NavLink>
            </NavItem>
          </>
        )}
        {!currentUser && (
          <>
            <NavItem>
              <NavLink to="/signin" className="nav-link">
                Sign In
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signup" className="nav-link">
                Sign Up
              </NavLink>
          </NavItem>
          </>
        )}
      </Nav>
    </>
  )
}

export default Header