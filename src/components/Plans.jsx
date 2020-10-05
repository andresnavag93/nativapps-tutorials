import React from "react";
import PlanDetail from "./PlanDetail";

const Plans = () => {
  return (
    <section className="plans">
      <div className="plans__container">
        <h1 className="plans__heading">¡Tenemos planes para todos</h1>
        <h1 className="plans__heading">los presupuestos!</h1>
        <div className="plans__hr" />
        <h3 className="plans__description">
          Adicional a la calidad y metodología ágil implementada,
        </h3>
        <h3 className="plans__description">
          puedes elegir el tiempo que necesitan tus hijos:
        </h3>
      </div>
      <div className="plans__details">
        <PlanDetail
          price={"$25,000"}
          planName={"PLAN 1"}
          planHour={"1"}
          planHourWord={"HORA"}
        />
        <PlanDetail price={"$125,000"} planName={"PLAN 2"} planHour={"4"} />
        <PlanDetail price={"$125,000"} planName={"PLAN 3"} planHour={"8"} />
        <PlanDetail
          price={"$25,000"}
          planName={"PLAN PROMO"}
          planHour={"1"}
          planHourWord={"HORA"}
          type={"discount"}
        />
        <PlanDetail
          price={"$125,000"}
          planName={"PLAN PREMIUM"}
          planHour={"4"}
          type={"promotion"}
        />
      </div>
    </section>
  );
};

export default Plans;
