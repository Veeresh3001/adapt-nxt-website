import React from "react";

import Header from "../Header";
import SideMenu from "../SideMenu";

import "./index.css";

const Inventory = () => {
  return (
    <div className="dashboard-main">
      <Header />
      <div className="dashboard-card">
        <SideMenu />
        <div className="dashboard-body">
          <h1>Welcome To Inventory</h1>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
