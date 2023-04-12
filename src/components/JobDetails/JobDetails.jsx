import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { AiOutlineDollarCircle, AiOutlineMail } from "react-icons/ai";
import { BsTelephone, BsCalendarWeek } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

import "./JobDetails.scss";

let arr = [];
const JobDetails = () => {
  const [jobs, setJobs] = useState([]);
  const [store, setStore] = useState([]);

  const { state } = useLocation();

  const {
    id,
    salary,
    jobTitle,
    description,
    responsibility,
    requirement,
    experience,
    phone,
    email,
    address,
  } = state.job;

  //useEffect(() => {
  //  const getJobs = JSON.parse(localStorage.getItem("jobId"));

  //  if (getJobs) {
  //    setStore(getJobs);
  //  }
  //}, []);

  //const handleApply = (idd) => {
  //  const exist = store.find((id) => id === idd);
  //  //console.log(exist);
  //  let a = [];

  //  if (!exist) {
  //    console.log("need no");
  //    a = [...store, idd];
  //  } else {
  //    console.log("need");
  //  }
  //  setStore(a);
  //  localStorage.setItem("jobId", JSON.stringify(store));
  //};
  const handleApply = (item) => {
    // Check if the item already exists in local storage
    const existingItems = JSON.parse(localStorage.getItem("myData")) || [];
    if (existingItems.find((i) => i === item)) {
      // Item already exists, don't save again
      return;
    }

    // Add the item to the local storage array
    const newItems = [...existingItems, item];
    localStorage.setItem("myData", JSON.stringify(newItems));
  };

  //console.log(jobs);

  return (
    <div className="jobDetails">
      <div className="jobDetails__header">Job Details</div>
      <div className="jobDetails__container">
        <div className="leftSide">
          <div className="description">
            <span>Job Description:</span> {description}
          </div>

          <div className="responsibility">
            <span>Job Responsibility:</span> {responsibility}
          </div>

          <div className="requirement">
            <span>Educational Requirement:</span> {requirement}
          </div>

          <div className="experience">
            <span>Experience:</span> {experience}
          </div>
        </div>
        <div className="rightSide">
          <div className="details">
            <div className="title">Job Details</div>
            <hr />
            <div className="salary">
              <span>
                <AiOutlineDollarCircle /> Salary:
              </span>
              {salary} (Per Month)
            </div>
            <div className="jobTitle">
              <span>
                <BsCalendarWeek /> Job Title:
              </span>
              {jobTitle}
            </div>
            <div className="title">Contact Information</div>
            <hr />
            <div className="phone">
              <span>
                <BsTelephone /> Phone:
              </span>
              {phone}
            </div>
            <div className="email">
              <span>
                <AiOutlineMail /> Email:
              </span>
              {email}
            </div>
            <div className="address">
              <span>
                <CiLocationOn /> Address:
              </span>
              {address}
            </div>
          </div>
          <button className="apply__button" onClick={() => handleApply(id)}>
            Apply Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
