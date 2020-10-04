import React from "react";
import youtubeLogo from "../assets/images/logos/youtube.png";

// import "../assets/styles/components/_header.scss";

const Header = () => {
  return (
    <header className="header">
      <figure className="header__logo">
        <img src={youtubeLogo} height="50" alt="Logo de youtube" />
      </figure>
      <nav className="header__menu">
        <ol>
          <li>
            <a className="header__menu-link" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="header__menu-link" href="/">
              About Us
            </a>
          </li>
          <li>
            <a className="header__menu-link" href="/">
              Services
            </a>
          </li>
          <li>
            <a className="header__menu-link" href="/">
              Success stories
            </a>
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default Header;
