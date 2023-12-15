import React from "react";
import "../styles/About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function About() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 div1" style={{}}>
            <div className="text1">
              <h3>Welcome to Our HR Consulting Agency</h3>
              <p className="heading11">"Empowering Your Career Growth"</p>
              <p className="heading22">
                At our HR Consulting Agency, we are dedicated to helping
                individuals achieve their career goals.
                <br />
                Whether you are a seasoned professional or just starting your
                career, we are here to support you.
                <br /> Your success story begins with us!
              </p>
              <br />
              <h1>Discover Opportunities with Us</h1>
            </div>
          </div>
        </div>
      </div>

      <div class="main-container">
        <div class="column">
          <h2>Welcome to Our HR Consulting Services</h2>
          <p>
            At HR SOLUTIONS, we are dedicated to guiding and supporting
            students in their journey to secure their dream jobs. With a team of
            experienced HR professionals, we provide personalized consulting
            services to help you navigate the competitive job market.
          </p>
          <p>
            Our mission is to empower students by offering strategic career
            advice, resume optimization, and interview preparation. We
            understand that each individual's career path is unique, and our
            consultants are committed to tailoring our services to meet your
            specific needs and aspirations.
          </p>
        </div>

        <div class="column">
          <h2>How We Can Assist You</h2>
          <p>
            <strong>Career Guidance:</strong>
            Receive expert advice on choosing the right career path based on
            your skills, interests, and goals.
          </p>
          <br></br>
          <p>
            <strong>Resume Optimization:</strong>
            Our team will help you create a compelling resume that stands out to
            employers and showcases your achievements.
          </p>
          <br></br>
          <p>
            <strong>Interview Preparation:</strong>
            Gain confidence and excel in interviews with personalized coaching
            and practice sessions.
          </p>
          <br></br>
          <p>
            <strong>Job Search Support:</strong>
            Access valuable resources and job opportunities tailored to your
            field of interest.
          </p>
          <br></br>
          <p>
            Whether you're a recent graduate or transitioning to a new career,
            [Your Company Name] is here to be your partner in success. Let's
            embark on this journey together and turn your career aspirations
            into reality.
          </p>
        </div>
      </div>
    </>
  );
}
