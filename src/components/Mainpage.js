import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles/Mainpage.css";

export default function Mainpage() {
  const [counts, setCounts] = useState({
    happyCustomers: 0,
    teamMembers: 0,
    companies: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const maxCounts = {
        happyCustomers: 99999,
        teamMembers: 100,
        companies: 800,
      };

      setCounts((prevCounts) => ({
        happyCustomers: Math.min(
          prevCounts.happyCustomers + 1000,
          maxCounts.happyCustomers
        ),
        teamMembers: Math.min(
          prevCounts.teamMembers + 10,
          maxCounts.teamMembers
        ),
        companies: Math.min(prevCounts.companies + 100, maxCounts.companies),
      }));
      if (
        counts.happyCustomers >= maxCounts.testsConducted &&
        counts.teamMembers >= maxCounts.teamMembers &&
        counts.companies >= maxCounts.happyCustomers
      ) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [counts]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-12 full-width-div"
            style={{
              backgroundImage: `url("images/hr-banner4.jpg")`,
              filter: "brightness(0.2)",
            }}
          ></div>
          <div className="overlay-text">
            <h3>HR CONSULTING AGENCY</h3>
            <p className="heading1">"Elevate Your Career: One Upload Away!"</p>
            <p className="heading2">
              Submit your resume in seconds and embark on a journey of growth.
              <br />
              Your next career move is just a click away.
            </p>
            <br />
            <button className="upload-button">
              <Link to="/upload" className="upload-link">
                Upload Resume
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="container2">
        <div className="title-container">
          <h1>TRENDING JOB OPPORTUNITIES</h1>
          <hr />
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
          <h4>IT Management</h4>
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
          <h1>{`${counts.happyCustomers.toLocaleString()}+`}</h1>
          <p>Happy Customers Across The Country</p>
        </div>
        <div className="container3-items">
          <h1>{`${counts.teamMembers.toLocaleString()}+`}</h1>
          <p>Team members working to give you the best services</p>
        </div>
        <div className="container3-items">
          <h1>{`${counts.companies.toLocaleString()}+`}</h1>
          <p>Companies</p>
        </div>
      </div>
      <div></div>
    </>
  );
}
