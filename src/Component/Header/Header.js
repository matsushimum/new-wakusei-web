import React from "react";
import logo from "../../Image/wakusei-logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="headerFAQ">
        <Link to="/FAQ">FAQ</Link>
      </div>
      <div className="headerKiyaku">
        <Link to="/Kiyaku">規約</Link>
      </div>
      <Link to="/">
        <img src={logo} alt="logo" className="headerLogo" />
      </Link>
      <div className="headerMission">
        <Link to="/Mission">ミッション</Link>
      </div>
    </div>
  );
}

export default Header;
