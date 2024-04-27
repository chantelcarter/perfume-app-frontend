import React from 'react';
import banner from '../assets/flower-banner.png'
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

const Home = ({ perfumes }) => {
  return (
    <>
      {/* <div className='home-container'>Home
        <img src={banner} alt="home banner of flower" className='home-banner'/>
      </div> */}
      <section id='carousel' className='carousel-block'>
        <Container fluid>
          <div className='title-holder'>
            <h2>Newest Fragrances</h2>
            <div className='subtitle'>Check out the newest fragrances in our library to add to your collection</div>
          </div>
          <Carousel className='carousel'>
            {
              perfumes.map((perfume) => (
                  <Carousel.Item key={perfume.id}>
                    <div className="d-flex justify-content-center">
                      <img
                      className="carousel-image"
                      src={perfume.image}
                      alt="First slide"
                    />
                    </div>
                    <Carousel.Caption>
                      <h5>{perfume.name}</h5>
                      <p>By {perfume.designer}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
              ))
            }
            
          </Carousel>
        </Container>
      </section>
    </>
  );
}

export default Home;
