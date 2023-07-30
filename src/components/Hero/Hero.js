// Hero.js
import React from 'react';
import './Hero.css'; // Import the CSS file for Hero component
import BicycleImage from './../../assets/bicycleimage.png'
import axios from 'axios';
import { useEffect, useState } from 'react';



const Hero = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);
  const [img, setImg] = useState([]);
  const [description, setDescription] = useState([]);


  useEffect(() => {
    axios.get('https://agumentic-backend-r34f.onrender.com/get1/')
      .then(res => {
        setData(res.data);
        console.log(res.data);
        setTitle(res.data[0].title);
        setImg(res.data[0].img);
        setDescription(res.data[0].description);
      })
      .catch(err => {
        console.log(err);
      })  
  }, []);

  return (
    <div className="hero">
      <div className="hero__left" style={{paddingLeft:'80px'}}>
        <h1 style={{fontSize:'50px'}}>
          {title && <p>{title}</p>}
          </h1>
        <p>
          {/* From bikes, gear, and accessories to expert advice and<br/>reviews, a bicycle website is your one-stop-shop for all your<br/> cycling needs. */}
          {description && <p>{description}</p>}
        </p>
        <div className="hero__button-price-wrapper">
          <a href="#shop" className="hero__button">SHOP NOW</a>
          <div className="hero__price"><b>$9,300.00</b></div>
        </div>
      </div>
      <div className="hero__right">
        <img src={img} alt="Bicycle" className="hero__bicycle-image" />
        <div className="hero__banner"><b>TO 50% DISCOUNT FOR FIRST &nbsp;  ● &nbsp;  UPTO 50% DISCOUNT FOR FIRST ORDER &nbsp;  ● &nbsp;  UPTO 50% DISCOUNT</b></div>
      </div>
    </div>
  );
};

export default Hero;
