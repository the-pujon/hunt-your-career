import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJobCard from "../../components/AppliedJobsCard/AppliedJobCard";

import "./AppliedJobs.scss";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);

  const totalJobs = useLoaderData();

  useEffect(() => {
    const getJob = JSON.parse(localStorage.getItem("myData"));
    const jb = [];

    if (getJob) {
      for (const id of getJob) {
        const appliedJobs = totalJobs.find((arr) => arr.id === id);
        jb.push(appliedJobs);
      }
    }

    setJobs(jb);
  }, [totalJobs]);

  const [selectedType, setSelectedType] = useState("");

  const handleChange = (event) => {
    setSelectedType(event.target.value);
  };

  const filterJobs = selectedType
    ? jobs.filter((item) => item.jobType.includes(selectedType))
    : jobs;

  console.log(filterJobs);

  return (
    <div className="appliedJobs">
      <div className="appliedJobs__title">Applied Jobs</div>
      {filterJobs.length === 0 && (
        <div className="appliedJobs__title">No Applied Jobs</div>
      )}
      {filterJobs && (
        <>
          <div className="filter">
            <label htmlFor="type-filter">Filter by </label>
            <select
              id="type-filter"
              className="type-filter"
              value={selectedType}
              onChange={handleChange}
            >
              <option className="option" value="">
                All
              </option>
              <option className="option" value="Onsite">
                Onsite
              </option>
              <option className="option" value="Remote">
                remote
              </option>
            </select>
          </div>
          <div className="appliedJobs__container">
            {filterJobs.map((job) => (
              <AppliedJobCard key={job.id} job={job} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AppliedJobs;
