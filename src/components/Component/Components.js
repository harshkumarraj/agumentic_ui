// Components.js
import React from 'react';
import CycleParts from './../../assets/cycleParts.png';
import './Components.css'; // Import the CSS file for Components
import axios from 'axios';
import { useEffect, useState } from 'react';


const Components = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);
  const [img, setImg] = useState([]);


  const [data2, setData2] = useState([]);
  const [title2, setTitle2] = useState([]);
  const [img2, setImg2] = useState([]);
  const [name2, setName2] = useState([]);

  useEffect(() => {
    axios.get('https://agumentic-backend-r34f.onrender.com/get3/')
      .then(res => {
        setData2(res.data);
        console.log(res.data);
        setTitle2(res.data[0].title);
        setImg2(res.data[0].img);
        setName2(res.data[0].name);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  useEffect(() => {
    axios.get('https://agumentic-backend-r34f.onrender.com/get2/')
      .then(res => {
        setData(res.data);
        console.log(res.data);
        setTitle(res.data[0].title);
        setImg(res.data[0].img);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  const [img3, setImg3] = useState([]);
  const [name3, setName3] = useState([]);
  const[img4,setImg4]=useState([]);
  const[name4,setName4]=useState([]);
  const[img5,setImg5]=useState([]);
  const[name5,setName5]=useState([]);
  const[img6,setImg6]=useState([]);
  const[name6,setName6]=useState([]);
  const[img7,setImg7]=useState([]);
  const[name7,setName7]=useState([]);

  useEffect(() => {
    axios.get('https://agumentic-backend-r34f.onrender.com/get3/')
      .then(res => {
        setData(res.data);
        console.log(res.data);
        setImg3(res.data[1].img);
        setName3(res.data[1].name);
        setImg4(res.data[2].img);
        setName4(res.data[2].name);
        setImg5(res.data[3].img);
        setName5(res.data[3].name);
        setImg6(res.data[4].img);
        setName6(res.data[4].name);
        setImg7(res.data[5].img);
        setName7(res.data[5].name);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);



  return (
    <div>
      <p style={{ fontSize: '40px', textAlign: 'center', marginTop: '200px' }}>
        <b>
          {/* FEATURE OF NINER RLT 9 RDO 5 */}
          {title && <p>{title}</p>}
          </b>
      </p>
      <img src={img} alt="Bicycle" style={{ width: '90%', height: '100%', marginLeft: '80px' }} />
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
          <img src={img2} style={{height:'240px'}} alt="Product 1" />
          <p style={{fontSize:'30px'}}>{name2 && <h4> {name2}</h4> }</p>
          <p>$4,510</p>
          <button style={{backgroundColor:'#ef740f',color:'white'}}>SHOP NOW</button>
        </div>
        <div className="card">
          <img src={img3} style={{height:'240px'}} alt="Product 2" />
          <p style={{fontSize:'30px'}}> {name3 && <h4>{name3}</h4> }  </p>
          <p>$1,570</p>
          <button>SHOP NOW</button>
        </div>
        <div className="card">
          <img src={img4} style={{height:'240px'}} alt="Product 3" />
          <p style={{fontSize:'30px'}}>{name4 && <h4>{name4}</h4> }</p>
          <p>$3,110</p>
          <button>SHOP NOW</button>
        </div>
      </div>

      {/* Second row of cards */}
      <div className="card-container">
        <div className="card">
          <img src={img5} style={{height:'240px'}} alt="Product 4" />
          <p style={{fontSize:'30px'}}>{name5 && <h4>{name5}</h4> }</p>
          <p>$6,220</p>
          <button>SHOP NOW</button>
        </div>
        <div className="card">
          <img src={img6} style={{height:'240px'}} alt="Product 5" />
          <p style={{fontSize:'30px'}}>{name6 && <h4>{name6}</h4> }</p>
          <p>$9,999</p>
          <button>SHOP NOW</button>
        </div>
        <div className="card">
          <img src={img7} style={{height:'240px'}} alt="Product 6" />
          <p style={{fontSize:'30px'}}>{name7 && <h4>{name7}</h4> }</p>
          <p>$5,150</p>
          <button>SHOP NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Components;
