// Components.js
import React from 'react';
import CycleParts from './../../assets/cycleParts.png';
import './Components.css'; // Import the CSS file for Components

const Components = () => {
  return (
    <div>
      <p style={{ fontSize: '40px', textAlign: 'center', marginTop: '200px' }}>
        <b>FEATURE OF NINER RLT 9 RDO 5</b>
      </p>
      <img src={CycleParts} alt="Bicycle" style={{ width: '90%', height: '100%', marginLeft: '80px' }} />
      <p style={{ fontSize: '40px', textAlign: 'center', marginTop: '150px' }}>
        <b>FEATURED PRODUCTS</b>
      </p>
      <p className="fade-text" style={{ fontSize: '15px', textAlign: 'center' }}>
        We also carry a wide range of accessories, including helmets, locks, lights, and <br />
        clothing, so you can be sure you're fully equipped for your next ride.
      </p>

      {/* First row of cards */}
      <div className="card-container">
        <div className="card">
          <img src="https://m.media-amazon.com/images/I/71u0LdBfzRL.jpg" style={{height:'240px'}} alt="Product 1" />
          <p style={{fontSize:'30px'}}>Hero Sprint 1</p>
          <p>$4,510</p>
          <button style={{backgroundColor:'#ef740f',color:'white'}}>SHOP NOW</button>
        </div>
        <div className="card">
          <img src="https://m.media-amazon.com/images/I/81Fq8U49OoS._SL1500_.jpg" style={{height:'240px'}} alt="Product 2" />
          <p style={{fontSize:'30px'}}>Hero Sprint 2</p>
          <p>$1,570</p>
          <button>SHOP NOW</button>
        </div>
        <div className="card">
          <img src="https://rukminim1.flixcart.com/image/850/1000/xif0q/cycle/h/n/6/cycles-catcher-non-suspension-v-brake-single-speed-black-orange-original-imagg359hkdujbdh.jpeg?q=90" style={{height:'240px'}} alt="Product 3" />
          <p style={{fontSize:'30px'}}>Hero Sprint 3</p>
          <p>$3,110</p>
          <button>SHOP NOW</button>
        </div>
      </div>

      {/* Second row of cards */}
      <div className="card-container">
        <div className="card">
          <img src="https://rukminim1.flixcart.com/image/850/1000/xif0q/cycle/c/1/2/sprint-x-factor-26-t-single-speed-mountain-bicycle-with-front-original-imagnb4dzppyz7j4.jpeg?q=20" style={{height:'240px'}} alt="Product 4" />
          <p style={{fontSize:'30px'}}>Hero Sprint 4</p>
          <p>$6,220</p>
          <button>SHOP NOW</button>
        </div>
        <div className="card">
          <img src="https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/hero-sprint-traveller-700c-7-speed.webp" style={{height:'240px'}} alt="Product 5" />
          <p style={{fontSize:'30px'}}>Hero Sprint 5</p>
          <p>$9,999</p>
          <button>SHOP NOW</button>
        </div>
        <div className="card">
          <img src="https://images.jdmagicbox.com/quickquotes/images_main/hero-bicycle-2008352433-8yyco9ea.jpg" style={{height:'240px'}} alt="Product 6" />
          <p style={{fontSize:'30px'}}>Hero Sprint 6</p>
          <p>$5,150</p>
          <button>SHOP NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Components;
