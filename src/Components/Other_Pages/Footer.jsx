import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'font-awesome/css/font-awesome.min.css';
import FontAwesome from 'react-fontawesome'
import "../Component_Styles/footer.css";

function Footertest(){
    const date = new Date();
    return (
        <div>
            <div className='footer-body'>
                <Container className="footer-temp">
                <Row>
                    <Col xs={12} lg={6}>
                        <iframe className="map-comp" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=70%25&amp;height=115%&amp;hl=en&amp;q=IIITDM%20kurnool+(College)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="90%" height="115%" frameborder="0"><a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a></iframe>

                    </Col>
                    <Col xs={6} lg={3}>
                        <div className='footer-title'>Esports</div>
                            <a href="/privacy-policy" className="footer-elements">Privacy-Policy</a><br />
                            <a href="/terms-conditions" className="footer-elements">Terms & Conditions</a><br />
                            <a href="/aboutus" className="footer-elements">About Us</a>
                    </Col>
                        <Col xs={6} lg={3}>
                        <div className='footer-title'>Connect</div>
                            <a className="footer-elements" href="https://twitter.com/surya_regalla31"> <FontAwesome className='connect-logo' name='twitter' size='1x' /> Twitter</a><br />
                            <a className="footer-elements" href="https://www.instagram.com/shiva_kudikala_/"> <FontAwesome className='connect-logo' name='instagram' size='1x' /> Instagram</a><br />
                            <a className="footer-elements"  href="https://github.com/Surya-Regalla"> <FontAwesome className='connect-logo' name='github' size='1x' /> Github</a><br />
                            <a className="footer-elements" href="https://www.youtube.com/@UnqGaming4K/featured"> <FontAwesome className='connect-logo' name='youtube' size='1x' /> Youtube</a> <br />
                            <a className="footer-elements" href="https://www.linkedin.com/in/surya-teja-regalla-b1aa81214/"> <FontAwesome className='connect-logo' name='linkedin' size='1x'  /> Linked-In</a> <br />
                    </Col>
                    
                    
                </Row>
                </Container>
            </div>
            <div className='footer-bottom'>
                <Row>
                <Col xs={12}>
                    <p>Copyright © {date.getFullYear()}, eSports IIITDM Kurnool, All rights reserved. </p>
                </Col>
                </Row>
            </div>
            
        
        </div>
        
        
    );

}
export default Footertest;