import React from 'react'
import about from '../assets/relaxing-orange-flower.jpg'


const AboutUs = () => {
  return (
    <>
      <div className='about-body'>
      <img src={about} alt="orange flower" className='about-image'/>
        <div className='about-text'>
          About PerfumePal
          <br/>
          Welcome to PerfumePal, your premier destination for all things fragrance! At PerfumePal, we're passionate about bringing the world of perfumes right to your fingertips. Whether you're a seasoned perfume aficionado or just beginning your olfactory journey, PerfumePal is your trusted companion.
          <p/>
          Our Mission
          <br/>
          At PerfumePal, our mission is simple: to delight your senses and elevate your personal style through the power of fragrance. We believe that scent is a deeply personal expression of identity and emotion, and we're dedicated to helping you discover the perfect scent that resonates with your unique personality and preferences.
          <p/>
          Our Features
          <br/>
          <b>Extensive Collection:</b> Explore our vast collection of premium perfumes sourced from renowned brands and niche fragrance houses around the globe. From classic favorites to exclusive releases, we have something for everyone.
          <br/>
          <b>Personalized Recommendations:</b> Not sure where to start? Our advanced recommendation engine utilizes cutting-edge algorithms to suggest perfumes tailored to your taste and preferences. Simply tell us what you love, and we'll do the rest.
          <br/>
          <b>Create Your Scent Profile:</b> Sign up and create your personalized scent profile to keep track of your favorite fragrances, purchase history, and wishlist. Your profile is your gateway to a curated fragrance experience designed just for you.
          <br/>
          <b>Interactive Reviews and Ratings:</b> Share your thoughts and experiences with our community through interactive reviews and ratings. Discover new scents recommended by fellow fragrance enthusiasts and contribute to our vibrant community.
          <br/>
          <b>Seamless Shopping Experience:</b> Enjoy a seamless shopping experience with secure checkout, fast shipping, and hassle-free returns. Whether you're treating yourself or finding the perfect gift for a loved one, PerfumePal makes shopping for fragrances a breeze.
          <p/>
          Get Started Today
          Ready to embark on your fragrance journey? Sign up for free and unlock a world of scent exploration at PerfumePal. Whether you're seeking a signature scent or experimenting with new fragrances, PerfumePal is your trusted partner every step of the way.
        </div>
      </div>
    </>
  )
}

export default AboutUs