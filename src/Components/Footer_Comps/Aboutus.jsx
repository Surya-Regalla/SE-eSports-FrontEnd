import React from "react";
import Navbar2 from "../Navbar/Navbar2";
import "../Component_Styles/footer_comps.css";
import Footer from "../Other_Pages/Footer";

function Aboutus(){
    return(
        <div>
            <Navbar2 />
            <div className="Top-sec">
                <p className="top-text">IIITDM KURNOOL ESPORTS <br />About Us</p>
            </div>
            <hr className="line" />
            <div className="full-content">
                <p className="contentp">Welcome to <span className="bold-text">IIITDM ESPORTS</span>, your go-to destination for everything related to esports. Our website provides easy registration and player statistics for esports enthusiasts, allowing you to stay up-to-date with the latest news and information from the world of esports.</p>
                <p className="contentp">At IIITDM ESPORTS, we understand the passion and dedication that esports fans have for their favorite games and players. That's why we are dedicated to providing you with the best possible experience on our website. Our user-friendly interface makes it easy for you to register and navigate through the website, and our advanced algorithms ensure that you get the most accurate and up-to-date player statistics</p>
                <p className="contentp">We believe in the power of esports to bring people together and create a community of like-minded individuals who share a common passion. Our website is designed to foster this community and provide a platform for esports enthusiasts to connect and share their experiences.</p>
                <p className="contentp">Thank you for choosing IIITDM ESPORTS as your go-to destination for everything esports. We are committed to providing you with the best possible service and look forward to serving you in the future.</p>
            </div>
            <div className="full-content">
                <h1 className="headings">Our Team : </h1>
            </div>
            <Footer />
        </div>
    );
}

export default Aboutus;