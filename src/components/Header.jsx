import React from "react";
import youtubeLogo from "../assets/images/logos/youtube.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img src={youtubeLogo} height="73" alt="Logo de youtube" />
        <nav className="menu">
          <ol>
            <li>
              <a className="link" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="link" href="/">
                About Us
              </a>
            </li>
            <li>
              <a className="link" href="/">
                Services
              </a>
            </li>
            <li>
              <a className="link" href="/">
                Success stories
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </header>
  );
};

export default Header;
