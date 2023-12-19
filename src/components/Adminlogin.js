import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles/Adminlogin.css";

export default function Adminlogin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send login request to the backend
    try {
      const response = await fetch(
        `http://localhost:8080/api/admin/exists/${formData.username}/${formData.password}`
      );

      if (response.ok) {
        const data = await response.json();

        if (data) {
          // If login is successful, navigate to the Admin component
          navigate("/admin");
        } else {
          // Handle incorrect credentials
          alert("Login failed. Please check your credentials.");
        }
      } else {
        // Handle other HTTP errors
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div className="main-container1">
      <div className="form-container1">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <i
                className="eye-icon"
                onClick={handleTogglePassword}
                style={{ cursor: "pointer" }}
              >
                {showPassword ? "🔒" : "👁️"}
              </i>
            </div>
          </div>

          <button type="submit" className="upload-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
