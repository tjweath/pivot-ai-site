import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../App/App.css";
import { getUser } from "../../utilities/users-service";
import "../UserProfile/UserProfile.css";
import "../JobCard/JobCard.css";

export default function UserProfile({ user, setUser }) {
  const [userData, setUserData] = useState(null);
  const [savedJobs, setSavedJobs] = useState([]);

  const statusColor = (status) => {
    let color = "";
    switch (status) {
      case "applied":
        color = "job-applied";
        break;
      case "interviewing":
        color = "job-interviewing";
        break;
      case "hired":
        color = "job-hired";
        break;
    }
    return color;
  };

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

  const handleToggleApplication = (index, newStatus) => {
    const updatedSavedJobs = [...savedJobs];
    updatedSavedJobs[index].status = newStatus;
    setSavedJobs(updatedSavedJobs);
    localStorage.setItem("savedJobs", JSON.stringify(updatedSavedJobs));
  };
  
  
  const getColor = (index) => {
    const colors = ["#b2f2bb", "#4dabf7", "#1971c2", "#40c057"];
    return colors[index % colors.length];
  };

  return (
    <div className="card-text-center">
      <div className="card-header"></div>
      <div>
        <h2>Hi {userData?.name}!</h2>
      </div>
      <h3>Saved Jobs</h3>
      <div className="job-cards-container">
        {savedJobs.map((job, index) => (
          <div
            key={index}
            className={`job-card-user-profile ${statusColor(job.status)}`}
          >
            <Link to={`/job/${job.id}`} state={job} className="Link">
              <div className="job-details">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="company-logo"
                    style={{ backgroundColor: getColor(index) }}
                  ></div>
                  <div style={{ marginLeft: "15px", textAlign: "left" }}>
                    <h2
                      className="mobile-title"
                      style={{ color: "#1971C2", margin: 0, fontSize: "25px" }}
                    >
                      {job.title.split(" ").slice(0, 3).join(" ").toUpperCase()}
                    </h2>
                    <h3
                      className="mobile-company"
                      style={{ margin: 0, color: "black", fontSize: "20px" }}
                    >
                      {job.company.display_name
                        .split(" ")
                        .slice(0, 2)
                        .join(" ")
                        .toUpperCase()}
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <p
                        style={{ margin: 0, fontSize: "20px", color: "black" }}
                        className="mobile-salary"
                      >
                        £
                        {job.salary_max.toLocaleString("en-GB", {
                          maximumFractionDigits: 0,
                        })}
                      </p>
                      <p
                        style={{
                          paddingLeft: "10px",
                          margin: 0,
                          fontSize: "20px",
                          color: "black",
                        }}
                        className="mobile-location"
                      >
                        📍{" "}
                        {job.location.area[3] || job.location.area[4] || "UK"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <button
              type="button"
              className="btn btn-danger delete-button"
              onClick={() => handleDeleteJob(index)}
            >
              X
            </button>
            <select
              className={`btn ${
                job.status === "applied" ? "btn-success" : "btn-primary"
              } toggle-button custom-select`}
              value={job.status}
              onChange={(e) => handleToggleApplication(index, e.target.value)}
            >
              <option value="notApplied">Not Applied</option>
              <option value="applied">Applied</option>
              <option value="interviewing">Interviewing</option>
              <option value="hired">Hired</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}
