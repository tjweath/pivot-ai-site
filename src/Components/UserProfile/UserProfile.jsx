import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../../App/App.css";
import { getUser } from "../../utilities/users-service";

export default function UserProfile({ user, setUser }) {
  const [userData, setUserData] = useState(null);
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await getUser();
      setUserData(userData);
      // Fetch saved jobs for the user
      const savedJobsData = JSON.parse(localStorage.getItem("savedJobs")) || [];
      setSavedJobs(savedJobsData);
    };
    fetchUserData();
  }, []);

  const handleDeleteJob = (index) => {
    const updatedSavedJobs = [...savedJobs];
    updatedSavedJobs.splice(index, 1); // Remove the job at the specified index
    setSavedJobs(updatedSavedJobs);
    // Update the localStorage with the updated saved jobs
    localStorage.setItem("savedJobs", JSON.stringify(updatedSavedJobs));
  };

  return (
    <div className="card-text-center">
      <div className="card-header"></div>
      <div>
        <h1>Hi {userData?.name}!</h1>
      </div>
      <h1>My Saved Jobs</h1>
      <ul>
        {savedJobs.map((job, index) => (
          <div key={index}>
            <Link
              to={`/job/${job.id}`}
              key={job.id}
              state={job}
              className="Link"
            >
              <div className="job-entry">
                {job.title} - {job.company.display_name}
              </div>
            </Link>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => handleDeleteJob(index)}
            >
              X
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
