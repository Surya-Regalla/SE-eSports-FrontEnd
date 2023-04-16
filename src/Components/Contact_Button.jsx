import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'font-awesome/css/font-awesome.min.css';
import FontAwesome from 'react-fontawesome';
import {FaUserAlt} from "react-icons/fa";
import {BsDice4} from "react-icons/bs";
import {MdEmail} from "react-icons/md";
import {AiFillMessage} from "react-icons/ai"

import "./Component_Styles/contact_Button.css";

import axios, * as others from 'axios';


function MyVerticallyCenteredModal(props) {

  const navigate = useNavigate();

  const [items, setItems] = useState({
    name: "",
    roll: "",
    email: "",
    feedback: ""
  });

  function handleChange(event)
  {
    const {name, value} = event.target;
    setItems((prev) => {
        return {...prev, [name]: value};
    });
  }

  function handleSubmit(event)
  {
      event.preventDefault();
      axios.post("http://localhost:8080/contact-info", {items})
      .catch(error => { console.log("Error sending Contact Details: ", error) });

      setItems({
        name: "",
        roll: "",
        email: "",
        feedback: ""
      });   
      props.temp();
  }


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    <div className="modal-bg">
    <Modal.Header closeButton className="modal-top">
        What's On Your Mind
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} lg={6}>
              <img className="modal-img" fluid={true} src={require('./Images/Contact_Button/feedback3.jpeg')} alt="modal-img"/>
            </Col>
            <Col xs={12} lg={6}>
                <div className="App">
                    <form onSubmit={handleSubmit} method="post" autocomplete="off">
                        <div className="form-icon">
                          <div className="icon">
                          <FaUserAlt size="15px" />
                          </div>
                            <input className="input-form" type="text" name="name" value={items.name} onChange={handleChange} placeholder="Enter Name " required />
                        </div>
                        <div className="form-icon">
                        <div className="icon">
                          <BsDice4 size="15px"/>
                          </div>
                            <input className="input-form" type="text" name="roll" value={items.roll} onChange={handleChange} placeholder="Enter Roll No. " required />
                        </div>
                        <div className="form-icon">
                        <div className="icon">
                          <MdEmail size="18px" />
                          </div>
                            <input className="input-form" type="email" name="email" value={items.email} onChange={handleChange} placeholder="Enter Email" />
                        </div>
                        <div className="form-icon">
                        <div className="icon">
                          <AiFillMessage size="18px" />
                          </div>
                            <textarea className="input-form" type="text" name="feedback" cols={31}  rows={6} value={items.feedback} placeholder="Enter Message  " onChange={handleChange} required/>
                        </div>
                        <div>
                            <button className="submit-btn" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </div>
      
    </Modal>
  );
}

function Modaltest() {

  const [modalShow, setModalShow] = React.useState(false);

  function tempFunc()
  {
    setModalShow(false);
  }

  return (
    <>
      <Button className="fab-button" variant="transparent" onClick={() => setModalShow(true)}>
        <div>
        
          <svg width="100%" height="100%" viewBox=" 0 0 232 199" fill="none">
            
            <defs>
              <path id="myHeart" fill-rule="evenodd" clip-rule="evenodd" d="M115.353 78.843L56.1288 19.6478L1.58594 74.1637L115.214 187.735L115.923 187.027L116.868 186.116L229.691 73.3598L175.265 18.9609L115.353 78.843Z" fill="#F35422"></path>
            </defs>
            <mask id="mask0_2906_19095">
              <rect x="116" y="0" width="116" height="140" fill="#fff"></rect>
            </mask>
            <use href="#myHeart"></use>
            <image href="https://dd.nyc/wp-content/themes/dd.nyc/static/img/fab-text.svg" height="199" width="232" className="fab-text"></image>
            
            <g mask="url(#mask0_2906_19095)">
            <use href="#myHeart"></use>
            </g>
          </svg>
        </div>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        temp={tempFunc}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Modaltest;