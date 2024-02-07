import axios from "axios";
import JobCard from "../../Components/JobCard/JobCard";
import { useEffect, useState } from "react";
import "./JobListPage.css"

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
  
    // Filter the displayed jobs based on current filters
    const filteredJobs = jobs.filter((job) => {
      const locationFilterMatch = job.location.area.some((area) => {
        return area.toLowerCase().includes(locationFilter.toLowerCase());
      });
  
      // Apply salary filter
      const salaryFilterMatch = salaryFilter ? job.salary_min >= salaryFilter : true;
  
      // Return true if both location and salary match
      return locationFilterMatch && salaryFilterMatch;
    });
  
    // Update displayedJobs with filtered list and new visible job count
    setDisplayedJobs(filteredJobs.slice(0, nextVisibleJobCount));
    setVisibleJobCount(nextVisibleJobCount);
    setShowBackToTop(true);
  };
  
  const handleSalaryFilterChange = (event) => {
    const filterValue = event.target.value.trim(); // Remove leading/trailing spaces
    const parsedValue = parseInt(filterValue);
    
    if (!isNaN(parsedValue)) {
      setSalaryFilter(parsedValue);
      
      const filteredJobs = jobs.filter((job) => {
        // Assuming job.salary_min is a single value, compare it with the filter value
        return job.salary_min >= parsedValue;
      });
      
      setDisplayedJobs(filteredJobs.slice(0, 7));
    }
  };
  
  const handleLocationFilterChange = (event) => {
    setLocationFilter(event.target.value);
    const filteredJobs = jobs.filter((job) => {
      return job.location.area.some((area) =>
      area.toLowerCase().includes(event.target.value.toLowerCase())
      );
    });
    setDisplayedJobs(filteredJobs.slice(0, 7));
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
              onChange={handleLocationFilterChange}
            />
          </div>
          <div class="filter">
            <select
              id="salaryFilter"
              class="form-control"
              value={salaryFilter}
              onChange={handleSalaryFilterChange}
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
