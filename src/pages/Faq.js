import React from 'react'

const Faq = () => {
  return (
    <>
      <h2>FAQ</h2>
      <ul>
        <li>
          <b>How do I create an account?</b>
          <p>Click "Sign Up" in the navigation bar at the top and fill out your information.</p>
        </li>
        <li>
          <b>How do I add a perfume to the library?</b>
          <p>After signing in to your account, click on "My Perfumes" in the navigation bar at the top, and "Create a new perfume" will be at the top of the page. </p>
        </li>
        <li>
          <b>How do I delete a perfume?</b>
          <p>Inside of "My Perfumes", at the bottom of the perfume you would like to delete, there will be a button to delete the perfume. WARNING: It will delete the perfume from our entire database.</p>
        </li>
      </ul>
    </>
  )
}

export default Faq