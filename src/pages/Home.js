import React from 'react';
import banner from '../assets/flower-banner.png'
import PerfumeCarousel from '../components/PerfumeCarousel';
import NewestArrivals from '../components/NewestArrivals';

const Home = ({ perfumes }) => {
  return (
    <>
      <div className='home-container'>
        <div className='home-image'>
          <img src={banner} alt="home banner of flower" className='home-banner'/>
        </div>
        <div className='home-contents'>
          <PerfumeCarousel perfumes={perfumes} />
          <NewestArrivals perfumes={perfumes} />
        </div>
      </div>
    </>
  );
}

export default Home;
