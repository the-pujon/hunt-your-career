import React from "react";
import { useLocation } from "react-router-dom";

import { AiOutlineDollarCircle, AiOutlineMail } from "react-icons/ai";
import { BsTelephone, BsCalendarWeek } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

import "./JobDetails.scss";

const JobDetails = () => {
  const { state } = useLocation();

  const {
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
          <button className="apply__button">Apply Button</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
