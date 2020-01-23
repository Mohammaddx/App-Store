import React from "react";
import { NavLink } from "react-router-dom";
import { createUseStyles } from "react-jss";
import "./style.css";

const useStyle = createUseStyles({
  link: {
    textDecoration: "none",
    color: "#283031",
    fontFamily: "'Quicksand', sans-serif",
    fontWeight: "bold",
    "&:hover": {
      color: "#ff4e6a"
    }
  }
});

const ItemsNavbar = () => {
  const classes = useStyle();
  return (
    <div className="navbar-items">
      <div className="container">
        <ul>
          <li>
            <NavLink to="/home" className={classes.link}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/offers" className={classes.link}>
              Offers
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={classes.link}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={classes.link}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ItemsNavbar;
