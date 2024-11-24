import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
// import { Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App" >
      <NavBar />
      <div className="about-us-container">
      <div className="about-section">
        <h1>AI Solutions to Pivot Your Business Forward</h1>
        <p>
        Welcome to Pivot-AI, where we bring the power of artificial 
        intelligence to your business. 
        <br /> 
        <br/> 
        Our mission is to identify
        and automate repetitive, time-consuming tasks, unlocking
        efficiency and innovation. Let us show you how AI can transform
        your operations, helping you pivot to a smarter, more streamlined future.
          <br />
          <br />
        </p>
        
        <div className="tech-stack-section">
          <h4>What are some of the benefits of AI Automation?</h4>
          <p/>Increased Efficiency and Productivity<p/>
          <p/>Cost Savings<p/>
          <p/>Enhanced Customer Experience<p/>
          <p/>Increased Efficiency and Productivity<p/>
          <p/>Better Decision-Making Through Data Insights<p/>
        </div>
      </div>

      <div className="features-section">
        <h4>Contact Pivot-AI</h4>
        <p>
        Pivot-AI was founded in 2025 by Tim Weatherseed, a seasoned professional
        with over 20 years of experience across various industries. Driven by a
        passion for leveraging technology to enhance client workflows, Tim set
        out to master AI automation and use it to deliver transformative solutions
        for businesses.
          <br />
          <br />
          E-mail Tim directly:
          <a href="mailto:t_weatherseed@hotmail.com">t_weatherseed@hotmail.com</a>
        </p>
      </div>
    </div>
    </div>
    
  );
}

export default App;