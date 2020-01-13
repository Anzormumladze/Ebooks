import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import Search from "../search/searchBook";

const Navbar = () => {
  const dropDown = () => {
    const searchAP = document.querySelector(".searched");
    searchAP.classList.toggle("openSearch");
  };
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/">eBooks</Link>
        </div>
        <div className="navigation">
          <ul>
            <li>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Favorites">Favorites</NavLink>
            </li>
          </ul>
        </div>
        <div className="search" onClick={dropDown}>
          <i className="fa fa-search" />
        </div>
        <Search />

        <div className="bars">
          <i className="fa fa-bars" />
        </div>
      </div>
      <div className="overlay" onClick={dropDown} />
    </>
  );
};

export default Navbar;
