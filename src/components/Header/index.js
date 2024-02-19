import React from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { CiDark } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineGTranslate } from "react-icons/md";

import logo from "../../images/logo.png";
import avator from "../../images/avator.jpeg";

import "./index.css";

const Header = () => {
  return (
    <div className="header-main">
      <div className="header-logo-card">
        <img className="logo" src={logo} alt="logo" />
        <AiOutlineMenuFold size={20} />
      </div>
      <div className="header-avator-card">
        <CiDark size={20} />
        <IoIosNotificationsOutline size={20} />
        <MdOutlineGTranslate size={20} />
        <img className="avator" src={avator} alt="avator" />
      </div>
    </div>
  );
};

export default Header;
