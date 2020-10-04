import React from "react";
import appsCoLogo from "../assets/images/logos/apps-co.png";
import minticLogo from "../assets/images/logos/mintic.png";
import santanderLogo from "../assets/images/logos/santander.png";
import todosPaisLogo from "../assets/images/logos/todos-pais.png";
import viveDigitalLogo from "../assets/images/logos/vive-digital-co.png";

const Clients = ({ type }) => {
  return (
    <section className="clients">
      <h1>¡Servicio de calidad y credibilidad!</h1>
      <div>------------</div>
      <h3>
        Contamos con el apoyo gubernamental local y nacional para una efectiva
        entrega de contenidos y clases de calidad certificadas.
      </h3>

      <img src={minticLogo} height="73" alt="Logo de MinTic" />
      <img src={santanderLogo} height="73" alt="Logo de Santander" />
      <img src={viveDigitalLogo} height="73" alt="Logo de Vive Digital" />
      <img src={appsCoLogo} height="73" alt="Logo de Apps.co" />
      <img src={todosPaisLogo} height="73" alt="Logo de Todos Pais" />
    </section>
  );
};

export default Clients;
