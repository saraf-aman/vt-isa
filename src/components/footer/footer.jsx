import { React, Fragment } from "react";
import { Outlet } from "react-router-dom";

import "./footer.styles.scss";
import footback from "../../assets/footer-background.png";

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
