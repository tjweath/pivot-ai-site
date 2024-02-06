
import { useLocation } from "react-router-dom";

export default function JobDetailPage() {
  const location = useLocation()
  const job = location.state;

  

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      <p>Salary: {job.salary_min} - {job.salary_max}</p>
      {/* Display other job details as needed */}
    </div>
  );
}
