import React from 'react';
import './Tips.css'

export default function Tips() {

    const handleBackUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
    }

  return (
    <div className="container mt-2">
      <h1 className="text-center mb-4">Tips for Creating an Effective CV</h1>
      <div className="row">
        <div className="col-md-6 ">
          <div className="card mb-4 custom-card">
            <div className="card-body">
              <h3 className="card-title">Tailor Your CV to Each Job Application</h3>
              <p className="card-text">Customize your CV for each job you apply to by highlighting relevant skills, experiences, and achievements that align with the job requirements.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="card mb-4 custom-card">
            <div className="card-body">
              <h3 className="card-title ">Highlight Key Skills and Experiences</h3>
              <p className="card-text">Emphasize technical skills, such as programming languages, frameworks, and tools, as well as relevant projects, internships, and coursework.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4 custom-card">
            <div className="card-body">
              <h3 className="card-title">Use Clear and Concise Language</h3>
              <p className="card-text">Keep your CV concise and easy to read by using bullet points, short sentences, and clear headings. Avoid using jargon or overly complex language.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4 custom-card">
            <div className="card-body">
              <h3 className="card-title">Include Quantifiable Achievements</h3>
              <p className="card-text">Quantify your achievements whenever possible by using numbers, percentages, or other measurable metrics to demonstrate your impact and success.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4 custom-card">
            <div className="card-body">
              <h3 className="card-title">Proofread Carefully</h3>
              <p className="card-text">Proofread your CV multiple times to catch any spelling or grammatical errors. Consider asking a friend or mentor to review your CV for feedback.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4 custom-card">
            <div className="card-body">
              <h3 className="card-title">Format Your CV Professionally</h3>
              <p className="card-text">Use a clean and professional format for your CV, with consistent styling, font sizes, and spacing. Choose a readable font and avoid using excessive formatting or colors.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <h3>Now let's create your CV!</h3>
        <button className="btn btn-primary mx-2 mb-4">Create CV 👇🏼</button>
        <button className="btn btn-secondary mx-2 mb-4" onClick={handleBackUp}> Back Up ☝🏻</button>
      </div>
    </div>
  );
}