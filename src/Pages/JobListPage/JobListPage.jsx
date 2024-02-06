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
  const [keywordFilter, setKeywordFilter] = useState("")
  const [salaryFilter, setSalaryFilter] = useState()
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.adzuna.com/v1/api/jobs/gb/search/2",
          {
            params: {
              app_id: process.env.REACT_APP_ID,
              app_key: process.env.REACT_APP_KEY,
              results_per_page: 200,
              what: "developer,software,tech" // Specify terms separated by commas
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

  const handleKeywordFilterChange = (event) => {
    setKeywordFilter(event.target.value);
    const filteredJobs = jobs.filter(job => {
      return job.description.some(desc => desc.toLowerCase().includes(event.target.value.toLowerCase()));
    });
    setDisplayedJobs(filteredJobs.slice(0, visibleJobCount));
  };


  const handleSalaryFilterChange = (event) => {
    const filterValue = parseInt(event.target.value); // Convert input value to an integer

    setSalaryFilter(filterValue);
    
    const filteredJobs = jobs.filter(job => {
      // Assuming job.salary_min is a single value, compare it with the filter value
      return job.salary_min >= filterValue;
    });
  
    setDisplayedJobs(filteredJobs.slice(0, visibleJobCount));
  };

  return (
    <main>
      <div>
        <input 
          type="text" 
          id="locationFilter"
          placeholder="City Name" 
          value={locationFilter} 
          onChange={handleLocationFilterChange} 
        />
        <input
          type="number"
          id="salaryFilter"
          placeholder="20000"
          value={salaryFilter}
          onChange={handleSalaryFilterChange}
        />
        <input
          type="text"
          id="keywordFilter"
          placeholder="Keywords"
          value={keywordFilter}
          onChange={handleKeywordFilterChange}
        />
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