import React, { useEffect, useState } from "react";

import "./CategoryJobs.scss";

const CategoryJobs = () => {
  const [jobCategory, setJobCategory] = useState([]);

  useEffect(() => {
    fetch("JobCategory.json")
      .then((res) => res.json())
      .then((data) => setJobCategory(data));
  }, []);

  return (
    <div className="jobCategory">
      <h1 className="jobCategory__title">Job Category List</h1>

      <p className="jobCategory__slogan">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      <div className="jobCategory__container">
        {jobCategory.map((category) => (
          <div className="jobCategory__job" key={category.id}>
            <div className="jobCategory__job-icon">
              <img src={category.icon} alt="" />
            </div>
            <div className="jobCategory__job-title">{category.name}</div>
            <div className="jobCategory__job-totalJobs">
              {category.totaljobs} Jobs Available
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryJobs;
