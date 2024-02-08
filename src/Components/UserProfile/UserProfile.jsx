import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../App/App.css";
import { getUser } from "../../utilities/users-service";
import "../UserProfile/UserProfile.css";
import "../JobCard/JobCard.css";

export default function UserProfile({ user, setUser }) {
  const [userData, setUserData] = useState(null);
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await getUser();
      setUserData(userData);
      const savedJobsData = JSON.parse(localStorage.getItem("savedJobs")) || [];
      setSavedJobs(savedJobsData);
    };
    fetchUserData();
  }, []);

  const handleDeleteJob = (index) => {
    const updatedSavedJobs = [...savedJobs];
    updatedSavedJobs.splice(index, 1);
    setSavedJobs(updatedSavedJobs);
    localStorage.setItem("savedJobs", JSON.stringify(updatedSavedJobs));
  };

  const handleToggleApplication = (index) => {
    const updatedSavedJobs = [...savedJobs];
    updatedSavedJobs[index].applied = !updatedSavedJobs[index].applied;
    setSavedJobs(updatedSavedJobs);
    localStorage.setItem("savedJobs", JSON.stringify(updatedSavedJobs));
  };

  const getColor = (index) => {
    const colors = ['#b2f2bb', '#4dabf7', '#1971c2', '#40c057'];
    return colors[index % colors.length];
  };

  return (
    <div className="card-text-center">
      <div className="card-header"></div>
      <div>
        <h1>Hi {userData?.name}!</h1>
      </div>
      <h1>Saved Jobs</h1>
      <div className="job-cards-container">
        {savedJobs.map((job, index) => (
          <div key={index} className="job-card-user-profile">
            <Link to={`/job/${job.id}`} state={job} className="Link">
              <div className="job-details">
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  <div className="company-logo" style={{ backgroundColor: getColor(index) }}>
                  </div>
                  <div style={{ marginLeft: "15px", textAlign: "left" }}>
                    <h2 className="mobile-text-header" style={{ color: "#1971C2", margin: 0, fontSize: "25px"}}>
                      {job.title.toUpperCase()}
                    </h2>
                    <h3 style={{ margin: 0, color: "black", fontSize: "20px" }}>
                      {job.company.display_name.toUpperCase()}
                    </h3>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                      <p style={{ margin: 0, fontSize: "20px", color: "black" }}>
                        £
                        {job.salary_max.toLocaleString("en-GB", {
                          maximumFractionDigits: 0,
                        })}
                      </p>
                      <p style={{ paddingLeft: "10px", margin: 0, fontSize: "20px", color: "black" }}>
                        📍 {job.location.area[3] || job.location.area[4] || "UK"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <button type="button" className={`btn ${job.applied ? 'btn-success' : 'btn-primary'} toggle-button`} onClick={() => handleToggleApplication(index)}>
              {job.applied ? 'Applied' : 'Not Applied'}
            </button>
            <button type="button" className="btn btn-danger delete-button" onClick={() => handleDeleteJob(index)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}
