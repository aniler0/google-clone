import React from "react";
import "./Home.css";
import { Avatar } from "@material-ui/core";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import { Link } from "react-router-dom";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <Link to="/gmail">Gmail</Link>
        <Link to="/images">Görseller</Link>
        <AppsOutlinedIcon />
        <Avatar />
      </div>

      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <Search />
        <div />
      </div>
    </div>
  );
};

export default Home;
