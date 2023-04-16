import React, {useEffect, useState} from "react";
import Row from 'react-bootstrap/Row';
import Navbar2 from "../Navbar/Navbar2";
import Col from 'react-bootstrap/Col';
import "../Component_Styles/teams.css";
import Footer from "../Other_Pages/Footer";

import axios, * as others from 'axios';

export default function Contact()
{
    const [items, setItems] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:8080/valo-teams").then((res) => {
           setItems(res.data);
        });
    }, []);

    return (
        <div>

            <Navbar2 />
            <div className="main-class">
                <p className="team-text">Valo Teams Registered</p>

                {items.map((single, index) => (
                    <div className="full-team">   
                        <p> <span className="bold-text"> Team Name:</span>  {single.teamname}</p>
                        <p> <span className="bold-text"> Whatsapp num:</span>  {single.wappnum}</p>
                        <hr />

                        <Row>
                            <Col lg={6}>
                                    <p> <span className="bold-text"> P1 Name:</span>  {single.p1name}</p>
                                    <p> <span className="bold-text"> P1 Roll num: </span> {single.p1roll}</p>
                                    <p> <span className="bold-text"> P1 ID: </span> {single.p1id}</p>
                                    <hr />
                                    <p> <span className="bold-text"> P2 Name:</span>  {single.p2name}</p>
                                    <p> <span className="bold-text"> P2 Roll num:</span>  {single.p2roll}</p>
                                    <p> <span className="bold-text"> P2 ID:</span>  {single.p2id}</p>
                            </Col>
                            <Col lg={6}>
                                <p> <span className="bold-text"> P3 Name:</span>  {single.p3name}</p>
                                <p> <span className="bold-text"> P3 Roll num:</span>  {single.p3roll}</p>
                                <p> <span className="bold-text"> P3 ID:</span>  {single.p3id}</p>
                                <hr />
                                <p> <span className="bold-text"> P4 Name:</span>  {single.p4name}</p>
                                <p> <span className="bold-text"> P4 Roll num:</span>  {single.p4roll}</p>
                                <p> <span className="bold-text"> P4 ID:</span>  {single.p4id}</p>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col lg={6}>
                                <hr />
                                <p> <span className="bold-text"> P5 Name:</span>  {single.p5name}</p>
                                <p> <span className="bold-text"> P5 Roll num:</span>  {single.p5roll}</p>
                                <p> <span className="bold-text"> P5 ID:</span>  {single.p5id}</p>
                            </Col>
                        </Row>
                    </div>
                ))}

            </div>
            <Footer />
        </div>
    );
}