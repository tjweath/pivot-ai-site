import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../../App/App.css"

const JobCard = () => {
  const [jobs, setJobs] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.adzuna.com/v1/api/jobs/gb/search/2?app_id=30c7f146&app_key=c648fa45330a45b6e9a92182c65ffe09&results_per_page=20&what=junior%20developer', {
          params: {
            app_id: `${process.env.REACT_APP_ID}`,
            app_key: `${process.env.REACT_APP_KEY}`,
          },
        });

        setJobs(response.data.results);
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    };

    fetchData();
  }, []);

  const handleHover = (index) => {
    setHoveredIndex(index);
  }

  const handleLeave = () => {
    setHoveredIndex(null);
  }

  return (
<div>
      {jobs.map((job, index) => (
        <div 
          key={job.id} 
          className={`job-card ${hoveredIndex === index ? 'hovered' : ''}`}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={handleLeave}
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div>
              <img 
                src="https://i.ibb.co/51SXjcx/UKSpook-Spotters-Logo.jpg" 
                alt="Company Logo" 
                className="company-logo" 
              />
            </div>
            <div style={{ marginLeft: '15px', textAlign: 'left' }}>
              <h2 style={{ color: '#1971c2', margin: 0 }}>{job.title.toUpperCase()}</h2>
              <h3 style={{ margin: 0 }}>{job.company.display_name.toUpperCase()}</h3>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <p style={{ margin: 0, fontSize: '18px' }}>£{job.salary_max.toLocaleString('en-GB', { maximumFractionDigits: 0 })}</p>
                <p style={{ paddingLeft: '10px', margin: 0, fontSize: '18px' }}>
                  {job.location.area[3] || job.location.area[4]}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCard;