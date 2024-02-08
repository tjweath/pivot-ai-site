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
        </p>
      </div>
      <div className="tech-stack-section">
        <h4>Tech Stack Used</h4>
        <div className="tech-icons">
          <Html5PlainWordmark size="75" />
          <Css3PlainWordmark size="75" color="red" />
          <JavascriptOriginal size="70" />
          <ReactOriginal size="70" />
          <BootstrapOriginal size="75" />
        </div>
      </div>
      <div className="features-section">
        <h4>Features</h4>
        <p>
          Our platform utilizes the Adzuna API to fetch job listings, providing
          users with a comprehensive database of available opportunities. Users
          can save jobs, track their application progress, and update their
          status (e.g., applied, interviewing) as they navigate their job search
          journey.
        </p>
      </div>
    </div>
  );
}