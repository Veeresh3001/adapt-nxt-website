import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineDashboard } from "react-icons/ai";
import { AiOutlineTag } from "react-icons/ai";
import { MdStorage } from "react-icons/md";
import { MdOutlineLocalShipping } from "react-icons/md";
import { LuShare2 } from "react-icons/lu";

import "./index.css";

const SideMenu = () => {
  return (
    <div className="side-main">
      <ul className="side-menu">
        <li className="side-menu-item">
          <Link className="link" to="/">
            <AiOutlineDashboard size={20} className="icon" />
            DashBoard
          </Link>
        </li>
        <li className="side-menu-item">
          <Link className="link" to="inventory">
            <AiOutlineTag size={20} className="icon" />
            Inventory
          </Link>
        </li>
        <li className="side-menu-item order">
          <Link className="link" to="orders">
            <MdStorage size={20} className="icon" />
            Orders
          </Link>
        </li>
        <li className="side-menu-item">
          <Link className="link" to="shipping">
            <MdOutlineLocalShipping size={20} className="icon" />
            Shipping
          </Link>
        </li>
        <li className="side-menu-item">
          <Link className="link" to="channel">
            <LuShare2 size={20} className="icon" />
            Channel
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
