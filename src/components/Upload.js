import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "../styles/Upload.css";


export default function Upload() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, like send it to a server
    console.log(formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      file: null,
    });
  };

  return (
    <>
    <div className="main-container1">
      <div className="form-container1">
        <h2>Upload Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
          </div>
  
          <div className="form-group">
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </div>
  
          <div className="form-group">
            <label>
              Upload PDF:
              <input type="file" name="file" onChange={handleFileChange} />
            </label>
          </div>
  
          <button type="submit" className="upload-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  </>
  
  );
}

