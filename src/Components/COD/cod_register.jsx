import Form from 'react-bootstrap/Form';
import "../Component_Styles/registration.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navbar2 from "../Navbar/Navbar2";
import Col from 'react-bootstrap/Col';

function RegisterCOD () {
    return(
        <div>
            <Navbar2 />
            <div className='reg'>
            <Form autocomplete="off">
                <div className="registrations">

                

                    <div className='rules-sec'>
                    <h2>Rules : (BGMI,Free Fire,COD)</h2>
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
                    <div className='reg-sec'>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label className='reg-p' column sm={3}>Team Name : </Form.Label>
                        <Col sm={9}>
                        <Form.Control className='form-inputt' type="text" placeholder="E.g : Team K-Ramp" name="Tname" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label className='reg-p' column sm={3}>Whatsapp No. : </Form.Label>
                        <Col sm={9}>
                        <Form.Control className='form-inputt' type="text" placeholder="" name="Tname" />
                        </Col>
                    </Form.Group>
                    {/* <FontAwesome className="icon" name='lock' size='1x' /> */}
                    <Row xs={1} md={2} className="g-3">
                        <Col className='reg-playerx'>
                            <p className='reg-p'>Player-1 (Leader) : </p>
                            <Form.Control className="form-input2" type="text" placeholder="Name" name="Tname" required />
                            <Form.Control className="form-input2" type="text" placeholder="Roll No. " name="Tname" required />
                            <Form.Control className="form-input2" type="text" placeholder="In Game-ID" name="Tname" required />
                        </Col>
                        <Col className='reg-playerx'>
                            <p className='reg-p'>Player-2 : </p>
                            <Form.Control className="form-input2" type="text" placeholder="Name" name="Tname" />
                            <Form.Control className="form-input2" type="text" placeholder="Roll No. " name="Tname" />
                            <Form.Control className="form-input2" type="text" placeholder="ID" name="Tname" />
                        </Col>
                        <Col className='reg-playerx'>
                            <p className='reg-p'>Player-3 : </p>
                            <Form.Control className="form-input2" type="text" placeholder="Name" name="Tname" />
                            <Form.Control className="form-input2" type="text" placeholder="Roll No. " name="Tname" />
                            <Form.Control className="form-input2" type="text" placeholder="ID" name="Tname" />
                        </Col>
                        <Col className='reg-playerx'>
                            <p className='reg-p'>Player-4 : </p>
                            <Form.Control className="form-input2" type="text" placeholder="Name" name="Tname" />
                            <Form.Control className="form-input2" type="text" placeholder="Roll No. " name="Tname" />
                            <Form.Control className="form-input2" type="text" placeholder="ID" name="Tname" />
                        </Col>
                    </Row>
                    <button className="register-btn" type="submit" name="reg-btn"> Register</button>
                    </div>
                    
                </div>
            </Form>
        </div>
        </div>
        

    );
}

export default RegisterCOD;