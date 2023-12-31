import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
    <a className="navbar-brand" href="/">HR-SOLUTIONS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/about" className="nav-link active" aria-current="page">About</Link>
        </li>
        <li className="nav-item">
        <Link to="/adminlogin" className="nav-link active" aria-current="page">Admin</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
