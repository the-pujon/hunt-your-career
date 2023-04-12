import React from "react";

import "./JobCard.scss";

import { CiLocationOn, CiDollar } from "react-icons/ci";

import { AiOutlineDollarCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const { id, logo, jobTitle, company, jobType, location, salary } = job;

  //  console.log(jobType[0]);

  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`jobdetails/${id}`, { state: { job } });
  };

  return (
    <div className="jobCard">
      <div className="jobCard__logo">
        <img src={logo} alt="Company logo" />
      </div>
      <div className="jobCard__container">
        <h2 className="jobCard__title">{jobTitle}</h2>
        <div className="jobCard__company">{company}</div>
        <div className="jobCard__jobType">
          <button className="type">{jobType[1]}</button>
          <button className="type">{jobType[0]}</button>
        </div>
        <div className="jobCard__details">
          <div className="location">
            <CiLocationOn /> {location}
          </div>
          <div className="salary">
            <AiOutlineDollarCircle /> {salary}
          </div>
        </div>
      </div>
      <button className="jobCard__button" onClick={handleDetails}>
        View Details
      </button>
    </div>
  );
};

export default JobCard;
