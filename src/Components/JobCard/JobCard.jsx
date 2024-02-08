import { Link } from "react-router-dom";
import "./JobCard.css";

const JobCard = ({ jobs, hoveredIndex, handleHover, handleLeave }) => {
  // Function to get a color from the list based on the index
  const getColor = (index) => {
    const colors = ['#b2f2bb', '#4dabf7', '#1971c2', '#40c057'];
    return colors[index % colors.length];
  };

  return (
    <div>
      {jobs.map((job, index) => {
        const jobTitleWords = job.title.split(" ");
        const companyWords = job.company.display_name.split(" ");
        const shortJobTitle = jobTitleWords.slice(0, 3).join(" ");
        const shortCompanyName = companyWords.slice(0, 2).join(" ");

        return (
          <div
            key={job.id}
            className={`job-card ${hoveredIndex === index ? "hovered" : ""}`}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={handleLeave}
          >
            <Link to={`/job/${job.id}`} state={job} className="Link">
              <div className="job-card-content">
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  <div className="company-logo" style={{ backgroundColor: getColor(index) }}>
                  </div>
                  <div style={{ marginLeft: "15px", textAlign: "left" }}>
                    <h2 className="jobtitle" style={{ color: "#1971C2", margin: 0, fontSize: "23px"}}>
                      {shortJobTitle.toUpperCase()}
                    </h2>
                    <h3 className="companyname" style={{ margin: 0, color: "black", fontSize: "19px" }}>
                      {shortCompanyName.toUpperCase()}
                    </h3>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                      <p style={{ margin: 0, fontSize: "16px", color: "black" }}>
                        £
                        {job.salary_max.toLocaleString("en-GB", {
                          maximumFractionDigits: 0,
                        })}
                      </p>
                      <p style={{ paddingLeft: "10px", margin: 0, fontSize: "16px", color: "black" }}>
                        📍 {job.location.area[3] || job.location.area[4] || "UK"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default JobCard;
