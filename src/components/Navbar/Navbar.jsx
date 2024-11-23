// import React from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import Movie from "../TitleCards/TvSeries.jsx";
import { useEffect, useRef } from "react";
import { logout } from "../../firebase";
const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  });
  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/tv-series" className="link">
              TV Shows
            </Link>
          </li>
          <li>
            <Link to="/movies" className="link">
              Movies
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              New & Popular
            </Link>
          </li>
          <li>
            <Link to="/stars" className="link">
              Stars
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              Browse by Language
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="" className="icons" />
        <div className="navbar-profile">
          <img src={profile_img} alt="" className="profile" />
          <img src={caret_icon} alt="" />
          <div className="dropdown">
            <p
              onClick={() => {
                logout();
              }}
            >
              Sign Out of Netflix
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
