import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FaBasketballBall, FaFileAlt} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Component_Styles/services.css";
import {GoGraph} from "react-icons/go";
import {BsNewspaper} from "react-icons/bs";
import {BsFillEmojiSunglassesFill} from "react-icons/bs";

export default function Services() {

    const services = [{
        icon: <GoGraph color="white" size="40px" />,
        title: 'Tournaments',
        content: 'Our website is a place to register for regular tournaments of various games, allowing users to participate in both online and offline events while offering varying entry fees and prize pools.'
    }, 
    {
        icon: <BsNewspaper color="white" size="40px" />,
        title: 'News & Updates',
        content: 'Our website serves as a reliable source of information for esports enthusiasts, providing news and updates about the tournaments held and the latest developments in the esports world.'
    }, 
    {
        icon: <BsFillEmojiSunglassesFill color="white" size="40px" />,
        title: 'Convenient',
        content: 'Our website allows players to easily view their teams rank  in the present tournament and highlights from past tournaments.'
    }];

  return (
    <div id="services" className="services-bg reveal">

        <section className="our-services">
            <div>

                <div className="services-title">
                    <h2>
                        Services
                    </h2>
                    <p>IIITDMK eSports Services</p>
                </div>
                <Container>
                    <Row className="services-row">

                        {services.map((service, index) => (
                            <Col md={6} lg={4} className="services-col">
                                <div className="services-content-col">
                                    <div className="services-icon">
                                        {service.icon}
                                    </div>
                                    <h4>
                                        {service.title}
                                    </h4>
                                    <p>
                                        {service.content}
                                    </p>
                                </div>
                            </Col>
                        ))}

                    </Row>
                </Container>

            </div>
        </section>
        
    </div>
   
  );
}

