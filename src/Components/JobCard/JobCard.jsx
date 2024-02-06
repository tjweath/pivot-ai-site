import { Link } from "react-router-dom";
import "./JobCard.css"
const JobCard = ({jobs, hoveredIndex, handleHover, handleLeave}) => {
  return (
<div>
      {jobs.map((job, index) => (
        <Link to={`/job/${job.id}`} key={job.id} state={job}>
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
              <h2 style={{ color: '#1971C2', margin: 0 }}>{job.title.toUpperCase()}</h2>
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
      </Link>
      ))}
    </div>
  )
  }
export default JobCard;