import React from "react";
import ItemsNav from "./itemsComponent/index";
import UserNav from "./userComponent/index";
import Logo from "../../images/Logo.png";
import "./style.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-logo">
          <img src={Logo} />
          <h1>
            <span>A</span>pp <span>S</span>tore
          </h1>
        </div>

        <ItemsNav />
        <UserNav />
      </div>
    </div>
  );
}

export default Navbar;
