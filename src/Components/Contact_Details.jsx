import React, {useEffect, useState} from "react";
import Navbar2 from "./Navbar/Navbar2";
import "./Component_Styles/Contact_details.css";
import Footer from "./Other_Pages/Footer";

import axios, * as others from 'axios';

export default function Contact()
{
    const [items, setItems] = useState([]);

    function tempFunc(props)
    {
        let newArray = [...props];
        newArray.reverse()
        setItems(newArray);
    }

    useEffect(()=> {
        // axios.get("http://localhost:8080/contact-info").then((res) => {
        //   tempFunc(res.data);
        // });
        axios.get("https://esports-server.onrender.com/contact-info").then((res) => {
          tempFunc(res.data);
        });
    }, []);

    return (
        <div>

            <Navbar2 />

            <div className="main-class">
                <p className="Feedback-text">Feedbacks</p>
                <div>
                    {items.map((single, index) => (
                            <div className="feedbacks">
                                <p className="name-sec"> Name:  {single.name}</p>
                                <p className="roll-sec"> <span  className="text-bold">  Roll No.:</span>  {single.roll}</p>
                                <p className="feedback-sec"> <span className="text-bold">Feedback:</span>  {single.feedback}</p>
                            </div>
                        ))} 
                </div>
                    
            </div>
        <Footer />
        </div>
    );
}