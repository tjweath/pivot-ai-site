import axios from "axios";
import JobCard from "../../Components/JobCard/JobCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function JobListPage() {
  const [jobs, setJobs] = useState([]);
  const [displayedJobs, setDisplayedJobs] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visibleJobCount, setVisibleJobCount] = useState(7);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.adzuna.com/v1/api/jobs/gb/search/2?app_id=30c7f146&app_key=c648fa45330a45b6e9a92182c65ffe09&results_per_page=50&what=junior%20developer%20software",
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
    setVisibleJobCount(visibleJobCount + 7);
    setDisplayedJobs(jobs.slice(0, visibleJobCount + 7));
    setShowBackToTop(true);
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <main>
      {/* Wrap JobCard with Link */}
      
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
