import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Component_Styles/initial_Carousel.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function CarouselStart() {
    return (
        <div className="row" id="home">

          <Carousel fade className="initial-carousel">

            <Carousel.Item className="carousel-item">
              <img
                className="carousel-img"
                src={require('../Images/Initial_Carousel/bgmi.jpg')} fluid={true}
                alt="BGMI slide"
              />
              <Carousel.Caption>
              <img 
                  className="logo1-img"
                  src={require('../Images/Initial_Carousel/logo-bgmi.png')}
                  alt="bgmi-logo"
              />
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                  className="carousel-img"
                  src={require('../Images/Initial_Carousel/valorant.jpg')}
                  alt="Valorant slide"
              />
                <Carousel.Caption>
                <img 
                    className="logo2-img"
                    src={require('../Images/Initial_Carousel/logo-valo.png')}
                    alt="valorant-logo"
                />
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="carousel-img"
                  src={require('../Images/Initial_Carousel/freefire.jpg')}
                  alt="Freefire slide"
                />
                <Carousel.Caption>
                <img 
                    className="logo1-img"
                    src={require('../Images/Initial_Carousel/logo-ff.png')}
                    alt="freefire-logo"
                />
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="carousel-img"
                  src={require('../Images/Initial_Carousel/cod.jpg')}
                  alt="COD slide"
                />

                <Carousel.Caption>
                <img 
                    className="logo2-img"
                    src={require('../Images/Initial_Carousel/logo-cod.png')}
                    alt="callofduty-logo"
                />
                </Carousel.Caption>
              </Carousel.Item>

            </Carousel>

          </div>    
    );
}

export default CarouselStart;