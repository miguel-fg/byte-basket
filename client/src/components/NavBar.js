// NavBar.js

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/assets/logo.png" alt="Logo" />
        <p className="logo-description">
          Byte
          <br />
          basket
        </p>
      </div>
      <div className="navbar-links">
        <Link className="navbar-link" to="/">
          Home
        </Link>
        <Link className="navbar-link" to="/dashboard">
          Dashboard
        </Link>
        <a className="navbar-link" href="#volunteer">
          Volunteer
        </a>
        <a className="navbar-link" href="#signin">
          Sign In
        </a>
        <button>
          <a
            target="blank"
            href="https://www.gofundme.com/f/4gvs2k-ams-food-bank"
          >
            Donate Now
          </a>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
