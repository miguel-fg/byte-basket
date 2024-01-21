// NavBar.js

import { Link } from "react-router-dom";

// user context
import { useAuthContext } from "../hooks/useAuthContext";

// logout hook
import { useLogout } from "../hooks/useLogout";

const NavBar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

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
        <Link className="navbar-link" to="/volunteer">
          Volunteer
        </Link>
        {!user && (
          <>
            <Link className="navbar-link" to="/register">
              Register
            </Link>
            <Link className="navbar-link" to="/signin">
              Log In
            </Link>
          </>
        )}
        {user && <button onClick={handleClick}>Logout</button>}
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
