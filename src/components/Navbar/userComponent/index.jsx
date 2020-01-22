import React from "react";
import Image from "../../../images/me.jpg";
import "./style.css";

const UserNav = () => {
  return (
    <div className="navbar-user">
      <div className="container">
        <div className="navbar-image">
          <img src={Image} />
        </div>
        <div className="navbar-cart">
          <i className="fas fa-cart-plus"></i>
          <sup>4</sup>
        </div>
        <div className="navbar-notefications">
          <i className="far fa-bell"></i>
          <sup>4</sup>
        </div>
      </div>
    </div>
  );
};

export default UserNav;
