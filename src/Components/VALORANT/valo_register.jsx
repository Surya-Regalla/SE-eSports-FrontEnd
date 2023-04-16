import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import "../Component_Styles/registration.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navbar2 from "../Navbar/Navbar2";
import Col from 'react-bootstrap/Col';

import axios, * as others from 'axios';

function RegisterVALO () {
    const navigate = useNavigate();

    var status = false;

    function getCookie(cname) 
    {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
        }
        return "0";
    }

    function checkCookie() {
        let x = getCookie("Surya");
        if (x == "Chill Bro") 
        {
        status = true;
        } 
    }

    checkCookie();


    const [addData, setAddData] = useState({
        Tname: "",
        Wnum: "",
        P1name: "",
        P1roll: "",
        P1id: "",
        P2name: "",
        P2roll: "",
        P2id: "",
        P3name: "",
        P3roll: "",
        P3id: "",
        P4name: "",
        P4roll: "",
        P4id: "",
        P5name: "",
        P5roll: "",
        P5id: ""
    });

    function handleChange(event)
    {
        const {name, value} = event.target;
        setAddData((prev) => {
            return {...prev, [name]: value};
        });
    }

    function handleSubmit(event)
    {
        event.preventDefault();
        axios.post("http://localhost:8080/valo-register", {addData})
        .catch(error => { console.log("Error sending Form Details: ", error) });

        setAddData({
            Tname: "",
            Wnum: "",
            P1name: "",
            P1roll: "",
            P1id: "",
            P2name: "",
            P2roll: "",
            P2id: "",
            P3name: "",
            P3roll: "",
            P3id: "",
            P4name: "",
            P4roll: "",
            P4id: "",
            P5name: "",
            P5roll: "",
            P5id: ""
        });   
        
        navigate('/');
    }

    function handleClick2()
    {
        var gamename = "VALORANT", direct = "/valo-points-table";
        axios.post("http://localhost:8080/tourni-starts", {gamename, direct})
        .catch(error => { console.log("Error sending Tourni On Details: ", error) });
        navigate('/');
    }

    return(
        <div>
            <Navbar2 />
            <div className='reg'>
            <Form onSubmit={handleSubmit} method="post" autocomplete="off">
                <div className="registrations">
                {status && <button className="start-btn" onClick={handleClick2}> Start Tournament</button>}
                {status && <a className="start-btn" href="/valo-team">Valo Team</a>}
                <div className='rules-sec'>
                    <h2>Rules : (Valorant)</h2>
                        <p>* Players participating should be from the institute.</p>
                        <p>* No two teams should have same team name. </p>
                        <p>* All team names or profiles are prohibited from including: </p>
                        <ul>
                            <li>Gang Affiliation</li>
                            <li>Drug References/Names (including alcohol and tobacco)</li>
                            <li>Sexual Material</li>
                            <li>Offensive Material</li>
                            <li>Politically Charged Symbols/Images</li>
                            <li>Slander of Generation Esports, Players, or its Staff</li>
                        </ul>
                    </div>
                    <div className="reg-sec">
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label className='reg-p' column sm={3}>Team Name : </Form.Label>
                        <Col sm={9}>
                        <Form.Control className='form-inputt' type="text" placeholder="E.g : Team K-Ramp" name="Tname" value={addData.Tname} onChange={handleChange} required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label className='reg-p' column sm={3}>Whatsapp No. : </Form.Label>
                        <Col sm={9}>
                        <Form.Control className='form-inputt' type="text" placeholder="" name="Wnum" value={addData.Wnum} onChange={handleChange} required />
                        </Col>
                    </Form.Group>
                    {/* <FontAwesome className="icon" name='lock' size='1x' /> */}
                    <Row xs={1} md={2} className="g-3">
                        <Col className='reg-playerx'>
                            <p className='reg-p'>Player-1 (Leader) : </p>
                            <Form.Control className="form-input2" type="text" placeholder="Name" name="P1name" value={addData.P1name} onChange={handleChange} required />
                            <Form.Control className="form-input2" type="text" placeholder="Roll No. " name="P1roll" value={addData.P1roll} onChange={handleChange} required />
                            <Form.Control className="form-input2" type="text" placeholder="In Game-ID" name="P1id" value={addData.P1id} onChange={handleChange} required />
                        </Col>
                        <Col className='reg-playerx'>
                            <p className='reg-p'>Player-2 : </p>
                            <Form.Control className="form-input2" type="text" placeholder="Name" name="P2name" value={addData.P2name} onChange={handleChange} required />
                            <Form.Control className="form-input2" type="text" placeholder="Roll No. " name="P2roll" value={addData.P2roll} onChange={handleChange} required />
                            <Form.Control className="form-input2" type="text" placeholder="In Game-ID" name="P2id" value={addData.P2id} onChange={handleChange} required />
                        </Col>
                        <Col className='reg-playerx'>
                            <p className='reg-p'>Player-3 : </p>
                            <Form.Control className="form-input2" type="text" placeholder="Name" name="P3name" value={addData.P3name} onChange={handleChange} required />
                            <Form.Control className="form-input2" type="text" placeholder="Roll No. " name="P3roll" value={addData.P3roll} onChange={handleChange} required />
                            <Form.Control className="form-input2" type="text" placeholder="In Game-ID" name="P3id" value={addData.P3id} onChange={handleChange} required />
                        </Col>
                        <Col className='reg-playerx'>
                            <p className='reg-p'>Player-4 : </p>
                            <Form.Control className="form-input2" type="text" placeholder="Name" name="P4name" value={addData.P4name} onChange={handleChange} required />
                            <Form.Control className="form-input2" type="text" placeholder="Roll No. " name="P4roll" value={addData.P4roll} onChange={handleChange} required />
                            <Form.Control className="form-input2" type="text" placeholder="In Game-ID" name="P4id" value={addData.P4id} onChange={handleChange} required />
                        </Col>
                        <Col className='reg-playerx'>
                            <p className='reg-p'>Player-5 : </p>
                            <Form.Control className="form-input2" type="text" placeholder="Name" name="P5name" value={addData.P5name} onChange={handleChange} required />
                            <Form.Control className="form-input2" type="text" placeholder="Roll No. " name="P5roll" value={addData.P5roll} onChange={handleChange} required />
                            <Form.Control className="form-input2" type="text" placeholder="In Game-ID" name="P5id" value={addData.P5id} onChange={handleChange} required />
                        </Col>

                    </Row>
                    <button className="register-btn" type="submit"> Register</button>
                    </div>
                    
                </div>
            </Form>
        </div>
        </div>
        
    );
}

export default RegisterVALO;