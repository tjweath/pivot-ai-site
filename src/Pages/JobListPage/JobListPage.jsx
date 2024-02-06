import axios from "axios";
import JobCard from "../../Components/JobCard/JobCard";
import { useEffect, useState } from "react";

export default function JobListPage() {
  const [jobs, setJobs] = useState([]);
  const [displayedJobs, setDisplayedJobs] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visibleJobCount, setVisibleJobCount] = useState(7);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [locationFilter, setLocationFilter] = useState("");
  const [salaryFilter, setSalaryFilter] = useState()
  
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
        console.log(response.data.results)
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
    const nextVisibleJobCount = visibleJobCount + 7;
    setVisibleJobCount(nextVisibleJobCount);
    
    // Reapply filters to the entire list of jobs
    const filteredJobs = jobs.filter(job => {
      // Apply location filter
      const locationFilterMatch = job.location.area.some(area => {
        return area.toLowerCase().includes(locationFilter.toLowerCase());
      });
  
      // Apply salary filter
      const salaryFilterMatch = salaryFilter ? job.salary_min >= salaryFilter : true;
      
      // Return true if both location and salary match
      return locationFilterMatch && salaryFilterMatch;
    });
  
    // Update displayedJobs with filtered list
    setDisplayedJobs(filteredJobs.slice(0, nextVisibleJobCount));
  
    setShowBackToTop(true);
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleLocationFilterChange = (event) => {
    setLocationFilter(event.target.value);
    const filteredJobs = jobs.filter(job => {
      return job.location.area.some(area => area.toLowerCase().includes(event.target.value.toLowerCase()));
    });
    setDisplayedJobs(filteredJobs.slice(0, visibleJobCount));
  };


  const handleSalaryFilterChange = (event) => {
    const filterValue = event.target.value.trim(); // Remove leading/trailing spaces
    const parsedValue = parseInt(filterValue);
  
    if (!isNaN(parsedValue)) {
      setSalaryFilter(parsedValue);
      
      const filteredJobs = jobs.filter(job => {
        // Assuming job.salary_min is a single value, compare it with the filter value
        return job.salary_min >= parsedValue;
      });
  
      setDisplayedJobs(filteredJobs.slice(0, visibleJobCount));
    }
  };

  return (
    <main>
   <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4 mb-3"> {/* Adjust the column width */}
          <input 
            type="text" 
            id="locationFilter"
            className="form-control"
            style={{ maxWidth: "250px" }} // Set max width to 150px
            placeholder="City Name" 
            value={locationFilter} 
            onChange={handleLocationFilterChange} 
          />
        </div>
        <div className="col-md-4 mb-3"> {/* Adjust the column width */}
          <input
            type="number"
            id="salaryFilter"
            className="form-control"
            style={{ maxWidth: "250px" }} // Set max width to 150px
            placeholder="20000"
            value={salaryFilter}
            onChange={handleSalaryFilterChange}
          />
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
        <button className="btn btn-primary" onClick={handleLoadMore}>Load More</button>
      )}
      {showBackToTop && (
        <button className="back-to-top btn btn-primary" onClick={handleBackToTop}>Back to Top</button>
      )}
    </main>
  );
}