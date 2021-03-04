import React from "react";
import Search from "./Search";

import Navbar from "./Navbar";
import { Avatar } from "@material-ui/core";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__top">
        <div className="top__left">
          <div className="logo">
            <Link to="/">
              <img
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                alt=""
              />
            </Link>
          </div>

          <Search hideButtons />
        </div>

        <div className="top__right">
          <Avatar />
          <AppsOutlinedIcon />
        </div>
      </div>

      <div className="bottom">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
