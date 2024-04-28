import React from 'react';
import banner from '../assets/flower-banner.png'
import PerfumeCarousel from '../components/PerfumeCarousel';

const Home = ({ perfumes }) => {
  return (
    <>
      {/* <div className='home-container'>Home
        <img src={banner} alt="home banner of flower" className='home-banner'/>
      </div> */}
      <PerfumeCarousel perfumes={perfumes} />
    </>
  );
}

export default Home;
