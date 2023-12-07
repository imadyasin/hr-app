import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './Mainpage.css';

export default function Mainpage() {
  return (
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

  )
}

