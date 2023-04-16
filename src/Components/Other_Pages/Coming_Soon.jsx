import React from "react";
import Navbar2 from "../Navbar/Navbar2";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../Component_Styles/comingsoon.css";
import comingsoonbg from "../Images/comingsoon-bg.jpg";

function Comingsoon() {
    return (
        <div>
        <Navbar2 />
            <div>
                <Row>
                    <Col className="col-sec-1" xs={12} lg={6}>
                        <div className="sec-1">
                            <p className="text-cs">New <span className="highlight-text">Tournament</span>
                            <br />
                            is Dropping Soon...</p>
                            <p className="extra-text">Our next tournament is under progress! We are preparing something amazing and exciting for you.
                             Special surprise for our awaiting gamers.</p>

                            <Row>
                                <Col className="text-sec-2" lg={4}>
                                    <p className="temp1">Location :</p>
                                    <p>IIITDM KURNOOL, Jagannathagattu hill, Dinnedevarapadu,518002.</p>
                                </Col>
                                <Col className="text-sec-2" lg={4}>
                                    <p className="temp1">Contacts :</p>
                                    <p>esports@iiitk.ac.in <br />9398928550</p>
                                    
                                </Col>
                                <Col className="text-sec-2" lg={4}>
                                    <p className="temp1">Follow us :</p>
                                    <a className="sec-2-links">Instagram</a><br />
                                    <a className="sec-2-links">Facebook</a><br />
                                    <a className="sec-2-links">Twitter</a>
                                </Col>
                            </Row>
                            
                        </div>
                    </Col>
                    <Col className="col-sec-2" xs={12} lg={6}>
                        <div className="sec-2">
                            <img className="comingsoon-bg" src={comingsoonbg} alt="comingsoon-background" />
                        </div>

                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Comingsoon;