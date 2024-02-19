import React from "react";

import Header from "../Header";
import SideMenu from "../SideMenu";

import "./index.css";

const DashBoard = () => {
  return (
    <div className="dashboard-main">
      <Header />
      <div className="dashboard-card">
        <SideMenu />
        <div className="dashboard-body">
          <h1>Welcome To DashBoard</h1>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
