import axios from "axios";
import JobCard from "../../Components/JobCard/JobCard";
import { useEffect, useState } from "react";
import "./JobListPage.css";

export default function JobListPage() {
  const [jobs, setJobs] = useState([]);
  const [displayedJobs, setDisplayedJobs] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visibleJobCount, setVisibleJobCount] = useState(7);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [locationFilter, setLocationFilter] = useState("");
  const [salaryFilter, setSalaryFilter] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=30c7f146&app_key=c648fa45330a45b6e9a92182c65ffe09&results_per_page=200&what=software%20junior%20",
          {
            params: {
              app_id: process.env.REACT_APP_ID,
              app_key: process.env.REACT_APP_KEY,
            },
          }
        );

        setJobs(response.data.results);
        console.log(response.data.results);
        setDisplayedJobs(response.data.results.slice(0, visibleJobCount));
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchData();
  }, [visibleJobCount]);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

  const handleLoadMore = () => {
    let nextVisibleJobCount = visibleJobCount + 7;

   
    const filteredJobs = jobs.filter((job) => {
      const locationFilterMatch = job.location.area.some((area) => {
        return area.toLowerCase().includes(locationFilter.toLowerCase());
      });

     
      const salaryFilterMatch = salaryFilter
        ? job.salary_min >= salaryFilter
        : true;
      return locationFilterMatch && salaryFilterMatch;
    });

    setDisplayedJobs(filteredJobs.slice(0, nextVisibleJobCount));
    setVisibleJobCount(nextVisibleJobCount);
    setShowBackToTop(true);
  };

  useEffect(() => {
    filterJobs();
  }, [locationFilter, salaryFilter, jobs, visibleJobCount]);

  const filterJobs = () => {
    const filteredJobs = jobs.filter((job) => {
      const locationMatch = locationFilter
        ? job.location.area.some((area) =>
            area.toLowerCase().includes(locationFilter.toLowerCase())
          )
        : true;
      const salaryMatch = salaryFilter
        ? job.salary_min >= parseInt(salaryFilter)
        : true;
      return locationMatch && salaryMatch;
    });
    setDisplayedJobs(filteredJobs.slice(0, visibleJobCount));
  };

  const handleFilterChange = (event) => {
    const { id, value } = event.target;
    if (id === "locationFilter") {
      setLocationFilter(value);
    } else if (id === "salaryFilter") {
      setSalaryFilter(value);
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main>
      <div class="container">
        <div class="row">
          <div class="filter">
            <input
              type="text"
              id="locationFilter"
              class="form-control"
              placeholder="Location"
              value={locationFilter}
              onChange={handleFilterChange}
            />
          </div>
          <div class="filter">
            <select
              id="salaryFilter"
              class="form-control"
              value={salaryFilter}
              onChange={handleFilterChange}
            >
              <option value="">Salary</option>
              <option value="20000">20k</option>
              <option value="30000">30k</option>
              <option value="40000">40k</option>
              <option value="50000">50k</option>
              <option value="60000">60k</option>
            </select>
          </div>
        </div>
      </div>

      <JobCard
        jobs={displayedJobs}
        hoveredIndex={hoveredIndex}
        handleHover={handleHover}
        handleLeave={handleLeave}
      />

      {jobs.length > displayedJobs.length && (
        <button className="btn btn-primary" onClick={handleLoadMore}>
          Load More
        </button>
      )}
      {showBackToTop && (
        <button
          className="back-to-top btn btn-primary"
          onClick={handleBackToTop}
        >
          Back Up
        </button>
      )}
    </main>
  );
}
