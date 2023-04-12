import React from "react";

import "./Header.scss";

import HeaderImage from "../../assets/headerImg.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container-title">
          One Step <br /> Closer To Your <br />
          <span> Dream Job</span>
        </div>
        <div className="header__container-p">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </div>
        <div>
          <button className="header__container-button">Get Start</button>
        </div>
      </div>

      <div className="header__image">
        <img src={HeaderImage} alt="" />
      </div>
    </div>
  );
};

export default Header;
