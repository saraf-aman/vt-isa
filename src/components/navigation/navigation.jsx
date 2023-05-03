import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { HashLink as HLink } from "react-router-hash-link";

import "./navigation.styles.scss";

import navbarback from "../../assets/nav-bar-bg-2.jpg";
import isalogo from "../../assets/isa-logo.png";

const Navigation = () => {
  return (
    <Fragment>
      <div
        className="navigation"
        style={{
          backgroundImage: `url(${navbarback})`,
        }}
      >
        <HLink className="logo-container" to="/" smooth>
          <img src={isalogo} alt="isalogo" />
        </HLink>
        <div className="nav-links-container">
          <HLink className="nav-link" to="/#aboutus" smooth>
            About Us
          </HLink>
          <Link className="nav-link" to="/events">
            Events
          </Link>
          <Link className="nav-link" to="/newstudents">
            New Students
          </Link>
          <HLink className="nav-link" to="/#contactus" smooth>
            Contact Us
          </HLink>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
