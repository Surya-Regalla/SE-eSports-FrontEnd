import React, {useEffect, useState} from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import {AiFillFolderAdd} from "react-icons/ai";
import {MdDelete} from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import {GrContact} from "react-icons/gr";
import {GrGamepad} from "react-icons/gr";
import {GrStatusInfo} from "react-icons/gr";
import {BsCalendarDate} from "react-icons/bs";

import axios, * as others from 'axios';

import "./Component_Styles/news_Cards.css";
import "./Component_Styles/contact_Button.css";


export default function Cards() {

  var news1 = [require('./Images/News_Cards/bgmi.jpg'),
    require('./Images/News_Cards/valo.jpg'),
    require('./Images/News_Cards/freefireCard.webp'),
    require('./Images/News_Cards/cod.jpg'), 
    require('./Images/News_Cards/chesscard.png'), 
    require('./Images/News_Cards/fallguys.jpg'),
    require('./Images/News_Cards/bgmi.jpg'),
    require('./Images/News_Cards/valo.jpg'),
    require('./Images/News_Cards/freefireCard.webp'),
    require('./Images/News_Cards/cod.jpg'), 
    require('./Images/News_Cards/chesscard.png'), 
    require('./Images/News_Cards/fallguys.jpg')
  ];

  var status = false;

  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
  const [items, setItems] = useState([]);
  const [ID, setID] = useState(0);

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

  useEffect(()=> {
    // axios.get("http://localhost:8080/").then((res) => {
    //   setItems(res.data);
    // });

    axios.get("https://esports-server.onrender.com/").then((res) => {
      setItems(res.data);
    });
  }, []);

  function MyVerticallyCenteredModal(props) {

    const [addItems, setAddItems] = useState({
      game: "",
      status: "",
      date: ""
    });

    function handleChange(event)
    {
      const {name, value} = event.target;
      setAddItems((prev) => {
        return {...prev, [name]: value};
      });
    }

    function handleSubmit(event)
    {
      event.preventDefault();

      // axios.post("http://localhost:8080/", {addItems})
      // .catch(error => { console.log("Error sending Add Details: ", error) });

      axios.post("https://esports-server.onrender.com/", {addItems})
      .catch(error => { console.log("Error sending Add Details: ", error) });

      setAddItems({game: "", status: "", date: ""});


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
          ADD GAME
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12} sm={4} md={5}>
                <img className="modal-img" fluid={true} src={require('./Images/Contact_Button/Add.png')} alt="modal-img"/>
                
              </Col>
  
              <Col xs={12} sm={8} md={7}>
                  <div className="App">
                      <form onSubmit={handleSubmit} method="post" autocomplete="off">
                        <div className="form-icon">
                        <div className="icon">
                          <GrGamepad size="15px" />
                          </div>
                            <input className="input-form" type="text" name="game" value={addItems.game} onChange={handleChange} placeholder="Enter Name of the Game" required />
                        </div>
                        <div className="form-icon">
                        <div className="icon">
                          <GrStatusInfo size="15px" />
                          </div>
                            <input className="input-form" type="text" name="status" value={addItems.status} onChange={handleChange} placeholder="Enter Status" required />
                        </div>
                        <div className="form-icon">
                        <div className="icon">
                          <BsCalendarDate size="15px" />
                          </div>
                            <input className="input-form" type="text" name="date" value={addItems.date} onChange={handleChange} placeholder="Enter Date" />
                        </div>
                        <div>
                            <button className="submit-btn" type="submit" >Add</button>
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

  function EditModalFunction(props) {

    const [tableItems, setTableItems] = useState({
      status: "",
      date: ""
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

      // axios.post("http://localhost:8080/edit-cards", {tableItems, ID})
      // .catch(error => { console.log("Error sending Card Details: ", error) });

      axios.post("https://esports-server.onrender.com/edit-cards", {tableItems, ID})
      .catch(error => { console.log("Error sending Card Details: ", error) });

      setTableItems({status: "", date: ""});


      setModalShow1(false);
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
          Edit Game
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12} sm={4} md={5}>
                <img className="modal-img" fluid={true} src={require('./Images/Contact_Button/Edit.png')} alt="modal-img"/>
                
              </Col>
  
              <Col xs={12} sm={8} md={7}>
                  <div className="App">
                      <form onSubmit={handleSubmit} method="post" autocomplete="off">
                        <div  className="form-icon">
                        <div className="icon">
                          <GrStatusInfo size="15px" />
                          </div>
                            <input  className="input-form" type="text" name="status" value={tableItems.status} onChange={handleChange} placeholder="Enter Status" required />
                        </div>
                        <div className="form-icon">
                        <div className="icon">
                          <BsCalendarDate size="15px" />
                          </div>
                            <input className="input-form" type="text" name="date" value={tableItems.date} onChange={handleChange} placeholder="Enter Date" required />
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
    setModalShow1(true);
    setID(id);
  }

  function handleDelete(sample)
  {
    // axios.post("http://localhost:8080/delete", {sample})
    // .then((res) => {window.location.reload(false);})
    // .catch(error => { console.log("Error sending Delete Details: ", error) });

    axios.post("https://esports-server.onrender.com/delete", {sample})
    .then((res) => {window.location.reload(false);})
    .catch(error => { console.log("Error sending Delete Details: ", error) });
  }
  var k = 0;

  return (
    <div className='news-bg' id="announcements">
      <h1 className='announce-tag'>Announcements</h1>
      {status && <a href="/contact-info" className="contact-info-btn"><GrContact /> Contact Info</a>}
      {status && <Button className="add-btn" onClick={() => setModalShow(true)}> <AiFillFolderAdd size="30px" color="black" /> </Button> }

      {status && <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} /> }

      <Row xs={1} md={2} sm={2} lg={3} className="g-4">

          {items.map((single_news, index) => (

            <Col>
              <a href={single_news.direct} className="temp">
                  <Card className="news-card">
                    <img className='news-img' variant="top" src={news1[k++]} fluid={true} alt="news-img" />
                    <Card.Body>
                      <h6 className='notice-element'>{single_news.status}</h6>
                      <Card.Title className="news-title">{single_news.game}</Card.Title>
                      <Card.Text>
                      <h6 className="sample-t">Tournament Starts on <span className='notice-element'>{single_news.date}</span></h6>
                      </Card.Text>
                    </Card.Body>
                  </Card>
              </a>
              {status && <button className="delete-btn" onClick={() => handleDelete(single_news._id)}><MdDelete  size="20px"/></button>}
              {status && <button  className="delete-btn" onClick={() => handleClick(single_news._id)}><FaEdit size="20px" /></button>}
              {status && <EditModalFunction show={modalShow1} onHide={() => setModalShow1(false)} /> }
            </Col>
            
          ))}

      </Row>
    </div>
    
  );
}
