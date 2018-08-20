import React, { Component } from "react";
//Stateless functional component
const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge m-2 badge-pill badge-secondary">
          {props.totalCount}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
