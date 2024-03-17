import React from 'react'
import banner from '../assets/flower-banner.png'

const Home = () => {
  return (
    <>
      <div className='home-container'>Home
        <img src={banner} alt="home banner of flower" className='home-banner'/>
      </div>
    </>
  )
}

export default Home