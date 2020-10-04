import React from "react";
import youtubeLogo from "../assets/images/logos/youtube.png";

const Footer = () => (
  <footer className="footer">
    <ol>
      <li>
        <a href="/">QUIENES SOMOS</a>
      </li>
      <li>
        <a href="/">TÉRMINOS & CONDICIONES</a>
      </li>
      <li>
        <a href="/">PREGUNTAS FRECUENTES</a>
      </li>
      <li>
        <a href="/">CONTÁCTENOS</a>
      </li>
    </ol>
    <img src={youtubeLogo} height="73" alt="Logo de youtube" />
  </footer>
);

export default Footer;
