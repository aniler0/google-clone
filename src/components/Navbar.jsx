import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftOptions">
        <div className="searchPage__option">
          <Link
            className="active"
            to="/all"
            style={{
              borderBottom: "rgb(36, 124, 255) 3px solid",
            }}
          >
            <SearchIcon />
            <h4 style={{ color: "rgb(44, 93, 253)" }}>Tümü</h4>
          </Link>
        </div>
        <div className="searchPage__option">
          <Link to="/images">
            <ImageIcon />
            <h4>Görseller</h4>
          </Link>
        </div>
        <div className="searchPage__option">
          <Link to="/videos">
            <OndemandVideoIcon />
            <h4>Videolar</h4>
          </Link>
        </div>
        <div className="searchPage__option">
          <Link to="/news">
            <DescriptionIcon />
            <h4>Haberler</h4>
          </Link>
        </div>

        <div className="searchPage__option">
          <Link to="/more">
            <MoreVertIcon />
            <h4>Daha Fazla</h4>
          </Link>
        </div>
      </div>

      <div className="rightOptions">
        <Link to="/ayarlar">
          <h4>Ayarlar</h4>
        </Link>
        <Link className="tools">
          <h4>Araçlar</h4>
        </Link>
      </div>

      <h4>Güvenli Arama Açık</h4>
    </div>
  );
};

export default Navbar;
