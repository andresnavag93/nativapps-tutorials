import React from "react";
import subcribeImage1 from "../assets/images/banners/subscribe-1.jpg";
import subcribeImage2 from "../assets/images/banners/subscribe-2.jpg";
import dialogBox from "../assets/images/icons/dialog-box.png";
import triangleGray from "../assets/images/icons/triangle-gray.png";

const Subscribe = ({ type, dialogBoxMessage, description }) => {
  let img;
  type === 1 ? (img = subcribeImage1) : (img = subcribeImage2);

  return (
    <section className="susbcribe">
      <img src={img} height="73" alt="Image de fondo" />;
      <img src={triangleGray} height="73" alt="Image de fondo" />
      {type == 2 && <h1>20%</h1>}
      <h1>Subscríbete</h1>
      <div>------------</div>
      <h3>{description}</h3>
      <button> Correo electronico</button>
      <img src={dialogBox} height="73" alt="Image de fondo" />
      <h3>{dialogBoxMessage}</h3>
    </section>
  );
};

export default Subscribe;
