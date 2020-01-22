import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/home" className={classes.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/offers" className={classes.link}>
              Offers
            </Link>
          </li>
          <li>
            <Link to="/products" className={classes.link}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ItemsNavbar;
