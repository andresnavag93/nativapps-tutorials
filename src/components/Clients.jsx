import React from "react";
import appsCoLogo from "../assets/images/logos/apps-co.png";
import minticLogo from "../assets/images/logos/mintic.png";
import santanderLogo from "../assets/images/logos/santander.png";
import todosPaisLogo from "../assets/images/logos/todos-pais.png";
import viveDigitalLogo from "../assets/images/logos/vive-digital-co.png";

const Clients = ({ type }) => {
  return (
    <section className="clients">
      <div className="clients__container">
        <h1 className="clients__heading">¡Servicio de calidad</h1>
        <h1 className="clients__heading">y credibilidad!</h1>
        <div className="clients__hr" />
        <h3 className="clients__description">
          Contamos con el apoyo gubernamental local y nacional
        </h3>
        <h3 className="clients__description">
          para una efectiva entrega de contenidos y clases de calidad
          certificadas.
        </h3>
        <img
          className="clients__logos-detail clients__logos-detail-mt"
          src={minticLogo}
          alt="Logo de MinTic"
        />
      </div>
      <div className="clients__logos">
        <img
          className="clients__logos-detail"
          src={santanderLogo}
          alt="Logo de Santander"
        />
        <img
          className="clients__logos-detail"
          src={viveDigitalLogo}
          alt="Logo de Vive Digital"
        />
        <img
          className="clients__logos-detail"
          src={appsCoLogo}
          alt="Logo de Apps.co"
        />
        <img
          className="clients__logos-detail"
          src={todosPaisLogo}
          alt="Logo de Todos Pais"
        />
      </div>
    </section>
  );
};

export default Clients;
