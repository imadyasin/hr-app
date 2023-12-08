import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './Mainpage.css';

export default function Mainpage() {

  return (
    <>
    <div className="container-fluid">
       <div className="row">
       <div className="col-12 full-width-div" style={{backgroundImage:`url("images/hr-banner4.jpg")`, filter:'brightness(0.2)'}}>
        </div>
       <div className="overlay-text">
        <h3>HR CONSULTING AGENCY</h3>
        <p className="heading1">"Elevate Your Career: One Upload Away!"</p>
        <p className="heading2">Submit your resume in seconds and embark on a journey of growth.<br/>
           Your next career move is just a click away.
        </p>
        <br/>
        <button className="upload-button">Upload Resume</button>
      </div>
      </div>
     </div>

 <div className="container2">
  <div className='title-container'>
  <h1>TRENDING JOB OPPORTUNITIES</h1>
  </div>
 
  <div className="test-items">
    <h4>IT Solutions</h4>
    
  </div>
  <div className="test-items">
    <h4>Icon Brainstorm</h4>
    
  </div>
  <div className="test-items">
    <h4>Product Design</h4>
    
  </div>
  <div className="test-items">
    <h4>Server Security</h4>
   
  </div>
  <div className="test-items">
    <h4>It Management</h4>
    
  </div>
  <div className="test-items">
    <h4>UX/UI Strategy</h4>
   
  </div>
  <div className="test-items">
    <h4>IT Marketing</h4>
    
  </div>
  <div className="test-items">
    <h4>Bank & Finance</h4>
    
  </div>

</div> 

<div className="container3">
<div className="container3-items">
  <h1>1M+</h1>
  <p>Tests Conducted Anually</p>
</div>
<div className="container3-items">
  <h1>750+</h1>
  <p>Team members working to give you the best testing services</p>
</div>
<div className="container3-items">
  <h1>12000+</h1>
  <p>Happy Customers Across The Country</p>
</div>
</div>
<div>
</div>
</>

  );
}

