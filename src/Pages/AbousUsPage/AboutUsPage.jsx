import React from "react";
import "./AboutUs.css";
import {
  BootstrapOriginal,
  Html5PlainWordmark,
  Css3PlainWordmark,
  JavascriptOriginal,
  ReactOriginal,
} from "devicons-react";

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-section">
        <h1>About inTech</h1>
        <p>
          Created by Tam, Tim, and Sylvia, inTech is a job board platform
          designed specifically for entry-level developers to find job
          opportunities. 
          <br />
          <br />
          This project was a group effort as part of our General Assembly course. With only a week to complete it, we collaborated closely to develop a user-friendly platform.
        </p>
        
        <div className="tech-stack-section">
          <h4>Tech Stack Used</h4>
          <div className="tech-icons">
            <Html5PlainWordmark size="70" />
            <Css3PlainWordmark size="70" color="red" />
            <JavascriptOriginal size="65" />
            <ReactOriginal size="70" />
            <BootstrapOriginal size="70" />
          </div>
        </div>
      </div>

      <div className="features-section">
        <h4>Features</h4>
        <p>
          Our platform utilizes the Adzuna API to fetch job listings, providing
          users with a comprehensive database of available opportunities. 
          <br />
          <br />
          Users
          can save jobs, track their application progress, and update their
          status (e.g., applied, interviewing) as they navigate their job search
          journey.
        </p>
      </div>
    </div>
  );
}
