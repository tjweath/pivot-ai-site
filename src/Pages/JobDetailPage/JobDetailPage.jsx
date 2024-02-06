import { useState } from "react";
import { useLocation } from "react-router-dom";
export default function JobDetailPage() {
  const [saved, setSaved] = useState(false);
  const location = useLocation();
  const job = location.state;
  if (!job) {
    return <div>Loading...</div>;
  }
  const handleSaveJob = () => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    const updatedSavedJobs = [...savedJobs, job];
    localStorage.setItem("savedJobs", JSON.stringify(updatedSavedJobs));
    setSaved(true);
  };
  return (
    <>
      <div className="job-card no-hover">
        {" "}
        {/* Add class 'no-hover' */}
        <h1 style={{ color: "#1971C2" }}>{job.title}</h1>
        <h3>{job.company.display_name.toUpperCase()}</h3>
        <p style={{ textAlign: "justify" }}>
          Job Description: {job.description}
        </p>
        <p>
          Salary: £
          {job.salary_min.toLocaleString("en-GB", { maximumFractionDigits: 0 })}
          +
        </p>
        <p>{job.location.area[3] || job.location.area[4]}</p>
      </div>
      <div>
        <button
          onClick={handleSaveJob}
          disabled={saved}
          className="btn btn-primary"
        >
          {saved ? "Job Saved" : "Save Job"}
        </button>
      </div>
    </>
  );
}
