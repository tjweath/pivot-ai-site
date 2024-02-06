import React from 'react';

export default function Tips() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Tips for Creating an Effective CV</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">1. Tailor Your CV to Each Job Application</h2>
              <p className="card-text">Customize your CV for each job you apply to by highlighting relevant skills, experiences, and achievements that align with the job requirements.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">2. Highlight Key Skills and Experiences</h2>
              <p className="card-text">Emphasize technical skills, such as programming languages, frameworks, and tools, as well as relevant projects, internships, and coursework.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">3. Use Clear and Concise Language</h2>
              <p className="card-text">Keep your CV concise and easy to read by using bullet points, short sentences, and clear headings. Avoid using jargon or overly complex language.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">4. Include Quantifiable Achievements</h2>
              <p className="card-text">Quantify your achievements whenever possible by using numbers, percentages, or other measurable metrics to demonstrate your impact and success.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">5. Proofread Carefully</h2>
              <p className="card-text">Proofread your CV multiple times to catch any spelling or grammatical errors. Consider asking a friend or mentor to review your CV for feedback.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">6. Format Your CV Professionally</h2>
              <p className="card-text">Use a clean and professional format for your CV, with consistent styling, font sizes, and spacing. Choose a readable font and avoid using excessive formatting or colors.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>now lets create your CV!</h3>
        <button>Scroll Down</button>
        <br />
        <button>Back Up</button>
      </div>
    </div>
  );
}