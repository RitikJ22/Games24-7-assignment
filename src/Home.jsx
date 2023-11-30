import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from "./images/logo.svg";
import logo2 from "./images/photo.png";
import { useState } from "react";



const Home =()=>{
 const [searchtText, setsearchtText] = useState("");

  const handleInputChange = (e) => {
    
    const inputValue = e.target.value.slice(0, 10);
    setsearchtText(inputValue);
  };

  return (
    <div className='container'>
     <div className='row-1'>
    <img src={logo} alt="logo"/>
    <div className='content'>
    <h1>PAN Verification</h1>
    <p>As per regulations, it is mandatory to verify your PAN details.</p>
    </div>
    </div>

    <div className='row-2'>
    <img src={logo2} alt="logo2"/>
    <div className="btn-container">
   <div className='inpt'>

      <span className='subhead'> Enter 10-digit PAN</span>
      <input 
      type="Search"
      placeholder="Enter 10-digit PAN"
      value={searchtText}
      maxLength={10} 
      required
      
      onChange={handleInputChange}
      />
       <span className='ctn-length'> {searchtText.length}/10</span>
      </div>

     <button type="submit"
             style={{background:searchtText.length ===10 ? "#8AA838":"#CCCCCC"} }
          onClick={() => {
           
            
          }}
        > Verify </button>
    </div>

    <div>
    </div>
    </div>
    </div>
  );
  


};

export default Home ;