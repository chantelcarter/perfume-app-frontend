import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from "react-router-dom";

const PerfumeCarousel = ({ perfumes }) => {
  return (
    <>
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
                      <NavLink
                      to={`/perfumeshow/${perfume.id}`}
                      className="nav-link"
                      >
                        <img
                          className="carousel-image"
                          src={perfume.image}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h5>{perfume.name}</h5>
                          <p>By {perfume.designer}</p>
                        </Carousel.Caption> 
                      </NavLink>
                    </div>
                  </Carousel.Item>
              ))
            }
          </Carousel>
        </Container>
      </section>
    </>
  );
}

export default PerfumeCarousel;
