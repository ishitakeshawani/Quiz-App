import React from "react";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="navbar semibold-font-weight">
      <Link className="nav-logo nav-link link-no-style" to="/">
        MN
      </Link>
      <Link className="nav-link link-no-style" to="/">
        Home
      </Link>
      <div className="nav-last-items">
        <a href="http://" className="link-no-style nav-link nav-icon-link">
          Login
        </a>
      </div>
    </nav>
  );
}
