import { useState } from "react";
import { useLocation } from "react-router-dom";
export default function JobDetailPage() {
  const [saved, setSaved] = useState(false)
  const location = useLocation()
  const job = location.state;
  if (!job) {
    return <div>Loading...</div>;
  }
  const handleSaveJob = () => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    const updatedSavedJobs = [...savedJobs, job];
    localStorage.setItem("savedJobs", JSON.stringify(updatedSavedJobs));
    setSaved(true);
  }
  return (
    <>
      <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      <p>Salary: {job.salary_min} - {job.salary_max}</p>
      {/* Display other job details as needed */}
    </div>
    <div>
      <button onClick={handleSaveJob} disabled={saved}>{saved ? "Job Saved" : "Save Job"}</button>
    </div>
    </>
  );
}







