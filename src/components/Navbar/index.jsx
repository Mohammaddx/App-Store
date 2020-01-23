import React, { useState, useEffect } from "react";
import ItemsNav from "./itemsComponent/index";
import UserNav from "./userComponent/index";
import Logo from "../../images/Logo.png";
import "./style.css";
import $ from "jquery";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen
      ? $(".user-item-navbar").css("left", "0")
      : $(".user-item-navbar").css("left", "-100%");
  });
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-logo">
          <img src={Logo} />
          <h1>
            <span>A</span>pp <span>S</span>tore
          </h1>
        </div>
        <div className="user-item-navbar">
          <ItemsNav />
          <UserNav />
        </div>
        <i
          className="fas fa-align-justify"
          onClick={() => setIsOpen(!isOpen)}
        ></i>
      </div>
    </div>
  );
}

export default Navbar;
