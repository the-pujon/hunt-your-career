import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJobCard from "../../components/AppliedJobsCard/AppliedJobCard";

import "./AppliedJobs.scss";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);

  const totalJobs = useLoaderData();

  //const j = totalJobs.find((arr) => arr.id === "1");
  //console.log(j);
  //console.log(totalJobs);

  //for (const arr of totalJobs) {
  //  console.log(arr.id);
  //}

  useEffect(() => {
    const getJob = JSON.parse(localStorage.getItem("myData"));
    const jb = [];

    for (const id of getJob) {
      const appliedJobs = totalJobs.find((arr) => arr.id === id);
      jb.push(appliedJobs);
      //console.log(appliedJobs);
    }
    //console.log(jb);
    setJobs(jb);
  }, [totalJobs]);

  //console.log(jobs);

  const [selectedType, setSelectedType] = useState("");

  const handleChange = (event) => {
    setSelectedType(event.target.value);
  };

  const filterJobs = selectedType
    ? jobs.filter((item) => item.jobType.includes(selectedType))
    : jobs;

  return (
    <div className="appliedJobs">
      <div className="appliedJobs__title">Applied Jobs</div>
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
    </div>
  );
};

export default AppliedJobs;
