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

        // Assuming the job data is in the 'results' property of the response
        setJobs(response.data.results);
        console.log(response.data.results)
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <div>
    {/* Render your job cards using the 'jobs' state */}
    {jobs.map((job) => (
      <div key={job.id} className="border p-3 mb-3">
        {/* Render individual job card details */}
        <h2>{job.title}</h2>
        <p>{job.company.display_name}</p>
        <p>£{job.salary_max}</p>
        <p>{job.location.area[3]}</p>
        {/* Add more job card details as needed */}
      </div>
    ))}
  </div>
);
};

export default JobCard;