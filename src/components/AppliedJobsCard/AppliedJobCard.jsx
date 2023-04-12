import React from "react";

import "./AppliedJobCard.scss";

import { CiLocationOn, CiDollar } from "react-icons/ci";

import { AiOutlineDollarCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const appliedJobCard = ({ job }) => {
  const { id, logo, jobTitle, company, jobType, location, salary } = job;

  //  console.log(jobType[0]);

  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`jobdetails/${id}`, { state: { job } });
  };

  return (
    <div className="appliedJobCard">
      <div className="appliedJobCard__logo">
        <img src={logo} alt="Company logo" />
      </div>
      <div className="appliedJobCard__container">
        <h2 className="appliedJobCard__title">{jobTitle}</h2>
        <div className="appliedJobCard__company">{company}</div>
        <div className="appliedJobCard__jobType">
          <button className="type">{jobType[1]}</button>
          <button className="type">{jobType[0]}</button>
        </div>
        <div className="appliedJobCard__details">
          <div className="location">
            <CiLocationOn /> {location}
          </div>
          <div className="salary">
            <AiOutlineDollarCircle /> {salary}
          </div>
        </div>
      </div>
      <button className="appliedJobCard__button" onClick={handleDetails}>
        View Details
      </button>
    </div>
  );
};

export default appliedJobCard;
