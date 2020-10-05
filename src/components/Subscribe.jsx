import React from "react";
import dialogBox from "../assets/images/icons/dialog-box.png";
import triangleGray from "../assets/images/icons/triangle-gray.png";
import Triangle from "./Triangle";

const Subscribe = ({ type, dialogBoxMessage, description }) => {
  let img, content;

  if (type == 1)
    content = (
      <>
        {" "}
        <h1 className="subscribe__promotions-number">20%</h1>
        <h1 className="subscribe__heading">Subscríbete</h1>
        <div className="subscribe__hr"></div>
        <h3 className="subscribe__description">{description}</h3>
      </>
    );
  else {
    content = (
      <div className="subscribe__promotions-heading ">
        <h1 className="subscribe__heading">Subscríbete</h1>
        <div className="subscribe__hr"></div>
        <h3 className="subscribe__description">{description}</h3>
      </div>
    );
  }

  return (
    <section className="susbcribe__section">
      <div
        className={`subscribe ${
          type === 1 ? "subscribe__bg-img-1" : "subscribe__bg-img-2"
        }`}
      >
        <Triangle />

        <img
          className="subscribe__triangle-img"
          src={triangleGray}
          alt="Image de fondo"
        />
        {content}
        {/* {type == 2 && <h1 className="subscribe__promotions">20%</h1>}
        <h1 className="subscribe__heading">Subscríbete</h1>
        <div className="subscribe__hr"></div>
        <h3 className="subscribe__description">{description}</h3> */}

        <button className="subscribe__button"> Correo electronico</button>
        <img
          className="subscribe__dialog-box"
          src={dialogBox}
          alt="Image de fondo"
        ></img>
        <h3 className="subscribe__dialog-box-text">{dialogBoxMessage}</h3>

        <div className="subscribe__bg-color"></div>
        <Triangle rotate={true} />
      </div>
    </section>
  );
};

export default Subscribe;
