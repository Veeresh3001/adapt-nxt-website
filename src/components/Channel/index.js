import React from "react";

import Header from "../Header";
import SideMenu from "../SideMenu";

// import "./index.css";

const Channel = () => {
  return (
    <div className="dashboard-main">
      <Header />
      <div className="dashboard-card">
        <SideMenu />
        <div className="dashboard-body">
          <h1>Welcome To Channel</h1>
        </div>
      </div>
    </div>
  );
};

export default Channel;
