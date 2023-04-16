import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import "../Component_Styles/points_Table.css";  
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import "../Component_Styles/contact_Button.css";
import "../Component_Styles/points_Table.css";
import Navbar2 from "../Navbar/Navbar2";
import { FaEdit } from "react-icons/fa";
import {GoGraph} from "react-icons/go"

import axios, * as others from 'axios';

export default function Points()
{
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [ID, setID] = useState(0);

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

    function tempFunc(props)
    {
        const sorted = [...props].sort((a, b) => (a.tpoints < b.tpoints) ? 1 : -1);
        setItems(sorted);
    }

    useEffect(()=> {
        axios.get("http://localhost:8080/ff-points-table").then((res) => {
          tempFunc(res.data);
        });
    }, []);

    function MyVerticallyCenteredModal(props) {

        const [tableItems, setTableItems] = useState({
          ppoints: "",
          kpoints: ""
        });
    
        function handleChange(event)
        {
          const {name, value} = event.target;
          setTableItems((prev) => {
            return {...prev, [name]: value};
          });
        }
    
        function handleSubmit(event)
        {
          event.preventDefault();
    
          axios.post("http://localhost:8080/ff-edit-points", {tableItems, ID})
          .catch(error => { console.log("Error sending Table Details: ", error) });
    
          setTableItems({ppoints: "", kpoints: ""});
    
    
          setModalShow(false);
          window.location.reload(false);
        }
    
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton className="modal-top">
              Edit
            </Modal.Header>
            <Modal.Body className="show-grid">
              <Container>
                <Row>
                  <Col xs={12} sm={4} md={5}>
                    <img className="modal-img" fluid={true} src={require('../Images/Contact_Button/trophy.png')} alt="modal-img"/>
                    
                  </Col>
      
                  <Col xs={12} sm={8} md={7}>
                      <div className="App">
                          <form onSubmit={handleSubmit} method="post" autocomplete="off">
                            <div className="form-icon">
                              <div className="icon">
                                <GoGraph size="15px" />
                              </div>
                              <input className="input-form" type="text" name="ppoints" placeholder=" Enter Standing Points" value={tableItems.ppoints} onChange={handleChange} required />
                            </div>
                            <div className="form-icon">
                              <div className="icon">
                                <GoGraph size="15px" />
                              </div>
                              <input className="input-form" type="text" name="kpoints" value={tableItems.kpoints} onChange={handleChange} placeholder="Enter Position Points" required />
                            </div>
                            <div>
                              <button className="submit-btn" type="submit" >Submit</button>
                            </div>
                          </form>
                      </div>
                    </Col>
                </Row>
              </Container>
            </Modal.Body>
          </Modal>
        );
    }

    function handleClick(id)
    {
        setModalShow(true);
        setID(id);
    }

    function handleClick2()
    {
      var gamename = "FREE FIRE", direct = "/coming-soon";
      axios.post("http://localhost:8080/tourni-end", {gamename, direct})
      .catch(error => { console.log("Error sending Tourni End Details: ", error) });
      navigate('/');
    }

    return (
      <div>
      <Navbar2 />
      <div className="background-p">
      <div className="points">
          <p className="os-text">OVERALL STANDINGS </p>
          {status && <button className="btn btn-primary" onClick={handleClick2}>Tourni over</button>}
            <table>
                <thead>
                    <tr >
                        <th className="main-col2">Team Name</th>
                        <th  className="main-col">Standing Points</th>
                        <th className="main-col">Kill Points</th>
                        <th  className="main-col3">Total Points</th>
                        {status && <th className="main-col4" variant="primary"> EDIT </th>}
                    </tr>
                </thead>

                <tbody>
                    {items.map((single, index) => (
                        <tr className="points-row">
                            <td className="points-col">{single.teamname}</td>
                            <td className="points-col">{single.ppoints}</td>
                            <td className="points-col">{single.kpoints}</td>
                            <td className="points-col">{single.tpoints}</td>
                            {/* {status && <button onClick={() => handleClick(single._id)}>Edit</button>} */}
                            {status && <a className="points-col"  onClick={() => handleClick(single._id)}> <FaEdit/> </a>}
                            {/* {status && <FontAwesomeIcon className="points-col" variant="primary" onClick={() => handleClick(single._id)} icon="fa-solid fa-pen-to-square"  />} */}
                            {status && <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} /> }
                        </tr>
                    ))}
                        
                </tbody>
            </table>

        </div>
      </div>
        
      </div>
    );
}
