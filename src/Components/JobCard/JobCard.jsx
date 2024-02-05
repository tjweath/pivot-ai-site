import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobCard = () => {
  const [jobs, setJobs] = useState([]);

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
        console.log(response.data.results)
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
    {/* Render your job cards using the 'jobs' state */}
    {jobs.map((job) => (
      <div key={job.id} className="border p-3 mb-3">
        <h2>{job.title}</h2>
        <p>{job.company.display_name}</p>
        <p>£{job.salary_max}</p>
        <p>{job.location.area[3]}</p>
      </div>
    ))}
  </div>
);
};

export default JobCard;