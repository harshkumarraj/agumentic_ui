// Hero.js
import React from 'react';
import './Hero.css'; // Import the CSS file for Hero component
import BicycleImage from './../../assets/bicycleimage.png'


const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__left" style={{paddingLeft:'80px'}}>
        <h1 style={{fontSize:'50px'}}>NINER RLT 9 RDO 5- <br/>STAR SHIMANO GRX<br/> 800 1X</h1>
        <p>
          From bikes, gear, and accessories to expert advice and<br/>reviews, a bicycle website is your one-stop-shop for all your<br/> cycling needs.
        </p>
        <div className="hero__button-price-wrapper">
          <a href="#shop" className="hero__button">SHOP NOW</a>
          <div className="hero__price"><b>$9,300.00</b></div>
        </div>
      </div>
      <div className="hero__right">
        <img src={BicycleImage} alt="Bicycle" className="hero__bicycle-image" />
        <div className="hero__banner"><b>TO 50% DISCOUNT FOR FIRST &nbsp;  ● &nbsp;  UPTO 50% DISCOUNT FOR FIRST ORDER &nbsp;  ● &nbsp;  UPTO 50% DISCOUNT</b></div>
      </div>
    </div>
  );
};

export default Hero;
