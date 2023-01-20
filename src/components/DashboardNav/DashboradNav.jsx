import React from "react";
import "./DashboardNav.css";
import image from "../../images/leaf.svg";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
const DashboradNav = () => {
  return (
    <div className="dashboardnav_container">
      <div className="dashboardnav_logo">
        <h1>FarmFlex</h1>
        <img src={image} />
      </div>
      <div className="dashboardnav_main_link">
        <div className="dashboardnav_link_profile">
          <CgProfile className="dashboardnav_link_profile_icon" />
          <h2>Dipen Pandit</h2>
        </div>
        <div className="dashboardnav_link">
          <h2>Order Management</h2>
          <h2 className="">Get Storage</h2>
          <div className="dashboardnav_link">
            <Link to="/store">
              <h2 className="">Book Storage</h2>
            </Link>
            <a href="/my-storage">
              <h2>My Storage</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboradNav;
