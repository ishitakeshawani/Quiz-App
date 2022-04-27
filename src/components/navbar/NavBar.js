import React from "react";

export function NavBar() {
  return (
    <nav className="navbar semibold-font-weight">
      <a className="nav-logo nav-link link-no-style" href="">
        MN
      </a>
      <a className="nav-link link-no-style" href="">
        Home
      </a>
      <div className="nav-last-items">
        <a href="http://" className="link-no-style nav-link nav-icon-link">
          Login
        </a>
      </div>
    </nav>
  );
}
