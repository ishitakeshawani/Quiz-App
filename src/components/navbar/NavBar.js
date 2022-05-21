import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts";

export function NavBar() {
  const { isLoggedIn, logOut } = useAuth();
  return (
    <nav className="navbar semibold-font-weight">
      <Link className="nav-logo nav-link link-no-style" to="/">
        MN
      </Link>
      <Link className="nav-link link-no-style" to="/">
        Home
      </Link>
      <div className="nav-last-items">
        <Link
          to={!isLoggedIn && `/login`}
          className="link-no-style nav-link nav-icon-link"
          onClick={() => isLoggedIn && logOut()}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </Link>
      </div>
    </nav>
  );
}
