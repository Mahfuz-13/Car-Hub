import React from "react";
// Importing link from react router dom
import { Link } from "react-router-dom";
import useFierbase from "../../hooks/useFirebase";
// Importing css file
import "./Header.css";

const Header = () => {
  const { user, logOut } = useFierbase();
  return (
    <div className="header-container">
      <h1 className="pharmacy-name">Car-Hub</h1>
      <nav className="nav justify-content-center">
        <Link className="nav-link" to="/home">
          Home
        </Link>
        <Link className="nav-link" to="/services">
          Explore
        </Link>
        <Link className="nav-link" to="/about/us">
          About us
        </Link>
        <Link className="nav-link" to="/contact/us">
          Contact us
        </Link>
        {user.email ? (
          <div class="dropdown">
            <button class="dropbtn">Dashboard</button>
            <div class="dropdown-content">
              <Link to="/pay">pay</Link>
              <Link to="#">My Orders</Link>
              <Link to="#">Review</Link>
            </div>
          </div>
        ) : (
          ""
        )}

        {user.email ? <p className="text-light m-2">{user.displayName}</p> : ""}
        {user.email ? (
          <button onClick={logOut}> Logout</button>
        ) : (
          <Link className="nav-link" to="/login">
            Login
          </Link>
        )}
        <Link className="nav-link" to="/register">
          Register
        </Link>
      </nav>
    </div>
  );
};

export default Header;
