import React from "react";
import dialogBox from "../assets/images/icons/dialog-box.png";
import TriangleBackground from "./TriangleBackground";

const Subscribe = ({ type, dialogBoxMessage, description }) => {
  let img, content;

  if (type == 1)
    content = (
      <>
        {" "}
        <h1 className="subscribe__promotions-number subscribe__bg-triangle">
          20%
        </h1>
        <h1 className="subscribe__heading">Subscríbete</h1>
        <div className="subscribe__hr"></div>
        <h3 className="subscribe__description">{description}</h3>
      </>
    );
  else {
    content = (
      <>
        <div className="subscribe__promotions-heading subscribe__bg-triangle">
          <h1 className="subscribe__heading">Subscríbete</h1>
          <div className="subscribe__hr"></div>
        </div>
        <h3 className="subscribe__description-promotion">{description}</h3>
      </>
    );
  }

  return (
    <section className="susbcribe__section">
      <div
        className={`subscribe ${
          type === 1 ? "subscribe__bg-img-1" : "subscribe__bg-img-2"
        }`}
      >
        <TriangleBackground />
        {content}
        <button className="subscribe__button"> Correo electrónico</button>
        <img
          className="subscribe__dialog-box"
          src={dialogBox}
          alt="Image de fondo"
        ></img>
        <h3 className="subscribe__dialog-box-text">{dialogBoxMessage}</h3>
        <div className="subscribe__bg-color"></div>
        <TriangleBackground rotate={true} />
      </div>
    </section>
  );
};

export default Subscribe;
