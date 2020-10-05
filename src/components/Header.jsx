import React, { useState } from "react";
import youtubeLogo from "../assets/images/logos/youtube.png";
import youtubeLogoIcon from "../assets/images/icons/youtube.png";

const Header = () => {
  const [active, setActive] = useState("");

  const contentNav = (
    <ol>
      <li>
        <a className="header__menu-link" href="/">
          Home
        </a>
      </li>
      <li>
        <a className="header__menu-link" href="/">
          About us
        </a>
      </li>
      <li>
        <a className="header__menu-link  header__link-active" href="/">
          Services
        </a>
      </li>
      <li>
        <a className="header__menu-link" href="/">
          Success stories
        </a>
      </li>
    </ol>
  );

  const handleOpenMenu = () => {
    active !== "" ? setActive("") : setActive("is-active");
  };

  return (
    <>
      <div className={`header-icon ${active}`} onClick={handleOpenMenu}>
        <img
          className="header__logo-icon"
          src={youtubeLogoIcon}
          width="80"
          alt="Logo de youtube"
        />
        {active !== "" && (
          <nav className="header__menu-responsive">{contentNav}</nav>
        )}
      </div>

      <div className={`header__nav-responsive ${active}`}></div>

      <header className="header">
        <figure className="header__logo">
          <img src={youtubeLogo} width="230" alt="Logo de youtube" />
        </figure>
        <nav className="header__menu">{contentNav}</nav>
      </header>
    </>
  );
};

export default Header;
