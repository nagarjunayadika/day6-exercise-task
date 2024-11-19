import React from "react";
import { Button } from "react-bootstrap";


function Header() {
  return (
    <div>
      <div className="header">
        <h1>My Blog</h1>
        <div className="nav-links">
          <a href="#">Login</a>
          <Button>Create Account</Button>
        </div>
      </div>
    </div>
  );
}
export default Header;
