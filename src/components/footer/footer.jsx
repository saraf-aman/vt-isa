import { React, Fragment } from "react";
import { Outlet } from "react-router-dom";

import "./footer.styles.scss";
import footback from "../../assets/footer-background.png";

import lnkdinimg from "../../assets/icons/linkedin.png";
import instaimg from "../../assets/icons/instagram.jpg";
import fbimg from "../../assets/icons/facebook.png";
import gcimg from "../../assets/icons/gobbler-connect.jpg";

const Footer = () => {
  return (
    <Fragment>
      <Outlet />
      <div
        className="foot"
        style={{
          backgroundImage: `url(${footback})`,
        }}
      >
        <div className="ext-links-container">
          <a
            className="ext-link"
            href="https://www.linkedin.com/company/vt-isa/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {/*<img src={lnkdinimg} alt="lnkdinimg" />*/}
            LinkedIn
          </a>
          <a
            className="ext-link"
            href="https://www.instagram.com/vt_isa/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Instagram
          </a>
          <a
            className="ext-link"
            href="https://www.facebook.com/vt.isa/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Facebook
          </a>
          <a
            className="ext-link"
            href="https://gobblerconnect.vt.edu/organization/isa"
            rel="noopener noreferrer"
            target="_blank"
          >
            Gobbler Connect
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
