import React, { useEffect, useState } from "react";

import "./Jobs.scss";
import JobCard from "../JobCard/JobCard";

const Jobs = ({ jobs }) => {
  const [FJobs, setFJobs] = useState([]);
  let temp = jobs.slice(0, 4);

  useEffect(() => {
    setFJobs(temp);
  }, []);

  const handleShowAll = () => {
    setFJobs(jobs);
  };

  return (
    <div className="jobs">
      <h1 className="jobs__title">Featured Jobs</h1>
      <div className="jobs__slogan">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </div>
      <div className="jobs__container">
        {FJobs.map((job) => (
          <div key={job.id}>
            <JobCard job={job} />
          </div>
        ))}
      </div>
      <div className="button__div">
        {FJobs.length === 4 && (
          <button className="job__button" onClick={handleShowAll}>
            Show All
          </button>
        )}
      </div>
    </div>
  );
};

export default Jobs;
