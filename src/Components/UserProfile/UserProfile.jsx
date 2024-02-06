import React, { useEffect, useState } from "react";
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
      {job.title} - {job.company.display_name}
    </div>
  ))}
</ul>

    </div>
  );
}