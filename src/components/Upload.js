import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "../styles/Upload.css";

export default function Upload() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
    console.log(file);
    window.URL.createObjectURL(file);
    window.open(window.URL.createObjectURL(file));
    if (file && file.type === "application/pdf") {
      setFormData({
        ...formData,
        file,
      });
    } else {
      alert("Please select a valid PDF file.");
      e.target.value = null;
    }
  };
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("file", formData.file);

    try {
      const response = await fetch("http://localhost:8080/api/users/save", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("User Saved Successfully");
        const fileInput = document.querySelector('input[type="file"]');
        fileInput.value = null;
        setFormData({
          name: "",
          email: "",
          file: null,
        });
      } else {
        alert("Failed to Save the User");
        setFormData({
          name: "",
          email: "",
          file: null,
        });
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
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
