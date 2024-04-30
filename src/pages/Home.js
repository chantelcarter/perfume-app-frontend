import React from 'react';
import PerfumeCarousel from '../components/PerfumeCarousel';
import NewestArrivals from '../components/NewestArrivals';

const Home = ({ perfumes }) => {
  return (
    <>
      <div className='home-container'>
        <div className='home-contents'>
          <PerfumeCarousel perfumes={perfumes} />
          <NewestArrivals perfumes={perfumes} />
        </div>
      </div>
    </>
  );
}

export default Home;
