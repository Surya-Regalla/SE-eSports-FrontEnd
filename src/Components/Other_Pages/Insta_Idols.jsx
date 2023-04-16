import React, { Component } from "react";
import Slider from "react-slick";
import "../Component_Styles/insta_Idols.css"

export default class Idols extends Component {
  render() {
  
    const num = (window.innerWidth < 500) ? 1 : 4;

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "20px",
      slidesToShow: num,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 500,
      cssEase: "linear"
    };

    const pix = [
      require('../Images/Insta_Idols/1.jpg'),
      require('../Images/Insta_Idols/2.jpg'),
      require('../Images/Insta_Idols/3.jpg'),
      require('../Images/Insta_Idols/4.jpg'),
      require('../Images/Insta_Idols/5.jpg'),
      require('../Images/Insta_Idols/6.jpg'),
      require('../Images/Insta_Idols/7.jpg'),
      require('../Images/Insta_Idols/8.jpg'),
      require('../Images/Insta_Idols/9.jpg'),
      require('../Images/Insta_Idols/10.jpg')
    ];
    
    return (
      <div className="idols-section reveal">
        <h2 className="idol-tag">Idols</h2>
        <Slider {...settings}>

          {pix.map((pic, index) => (
            <div>
              <img className="idol-img" src={pic}></img> 
            </div>
          ))}
          
        </Slider>
      </div>
    );
  }
}