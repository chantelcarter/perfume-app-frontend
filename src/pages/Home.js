import React, { useState, useEffect } from 'react';
import banner from '../assets/flower-banner.png'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap'

const Home = ({ perfumes }) => {
  return (
    <>
      <div className='home-container'>Home
        <img src={banner} alt="home banner of flower" className='home-banner'/>
      </div>
    </>
  );
}

export default Home;
