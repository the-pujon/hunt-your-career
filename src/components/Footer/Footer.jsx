import React from "react";

import "./Footer.scss";

import FooterImg from "../../assets/Icons/footer.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="details">
          <div className="footer__title">
            <h1 className="title">HuntYourCareer</h1>
            <p className="des">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <img src={FooterImg} alt="" />
          </div>

          <div className="company">
            <h2>Company</h2>
            <p>About Us</p>
            <p>Work</p>
            <p>Latest News</p>
            <p>Careers</p>
          </div>

          <div className="product">
            <h2>Product</h2>
            <p>Prototype</p>
            <p>Plans & Pricing</p>
            <p>Customers</p>
            <p>Integration</p>
          </div>

          <div className="support">
            <h2>Support</h2>
            <p>Help Desk</p>
            <p>Sales</p>
            <p>Became a Partner</p>
            <p>Developers</p>
          </div>

          <div className="contact">
            <h2>Contact</h2>
            <p>524 Broadway , NYC</p>
            <p>+1 777 - 978 - 5570</p>
          </div>
        </div>
        <hr />
        <div className="footer__finish">
          <div className="copyright">@2023 CareerHub. All Rights Reserved</div>
          <div className="credit">Powered by HuntYourCareer</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
