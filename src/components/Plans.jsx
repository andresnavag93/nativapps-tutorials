import React from "react";
import PlanDetail from "./PlanDetail";

const Plans = () => {
  return (
    <section className="plans">
      <div className="container">
        <h1>¡Tenemos planes para todos los presupuestos!</h1>
        <div>------------</div>
        <h3>
          Adicional a la calidad y metodología ágil implementada, puedes elegir
          el tiempo que necesitan tus hijos:
        </h3>
        <PlanDetail />
      </div>
    </section>
  );
};

export default Plans;
