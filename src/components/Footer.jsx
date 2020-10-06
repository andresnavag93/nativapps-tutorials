import React from "react";
import youtubeLogo from "../assets/images/logos/youtube.png";
import TriangleBackground from "./TriangleBackground";

const Footer = () => (
  <footer className="footer__section">
    <div className="footer">
      <TriangleBackground />
      <div className="footer__info">
        <ol className="footer__info-ol">
          <li>
            <a href="#">QUIÉNES SOMOS</a>
          </li>
          <li>
            <a href="#">TÉRMINOS & CONDICIONES</a>
          </li>
          <li>
            <a href="#">PREGUNTAS FRECUENTES</a>
          </li>
          <li>
            <a href="#">CONTÁCTENOS</a>
          </li>
        </ol>
        <img
          className="footer__info-img"
          src={youtubeLogo}
          alt="Logo de youtube"
        />
      </div>
      <div className="footer__bg-color"></div>
      <TriangleBackground rotate={true} />
    </div>
  </footer>
);

export default Footer;
