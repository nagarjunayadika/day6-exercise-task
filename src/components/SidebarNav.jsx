import React from "react";
import { Link } from "react-router-dom";

function SidebarNav() {
  const sortBy = [{ label: "Latest" }, { label: "Hot" }, { label: "Best" }];
  const navLinks = [
    { to: "home", label: "Home" },
    { to: "profile", label: "Profile" },
    { to: "makepost", label: "Make Post" },
    { to: "about", label: "About" },
    { to: "videos", label: "Videos" },
    { to: "contact", label: "Contact" },
  ];
  return (
    <div className="sidebar">
      <div className="menu">
        <div className="sort-options">
          <h6>Sort by</h6>
          {sortBy.map((link, index) => (
            <a href="#" key={index}>
              <i className="fa fa-home"></i>
              {link.label}
            </a>
          ))}
        </div>
        <div className="navigation-links">
          <h6>Navigation</h6>
          {navLinks.map((link, index) => (
            <Link to={link.to} smooth={true} duration={500} key={index}>
              <i className="fa fa-home"></i>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default SidebarNav;
