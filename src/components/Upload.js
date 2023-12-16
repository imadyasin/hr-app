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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create a FormData object to send as the request body
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('file', formData.file);

    try {
      const response = await fetch('http://localhost:8080/api/users/save', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        alert('Image saved successfully');
        const fileInput = document.querySelector('input[type="file"]');
        fileInput.value = null;
        setFormData({
          name: '',
          email: '',
          file: null,
        });
      } else {
        alert('Failed to save image');
        setFormData({
          name: '',
          email: '',
          file: null,
        });
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }

    // Reset the form after submission
   
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

