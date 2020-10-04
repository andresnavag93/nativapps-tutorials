import React from "react";
import planBox from "../assets/images/icons/plan-box.png";
import dialogBoxText from "../assets/images/icons/dialog-box-text.png";
import premium from "../assets/images/icons/premium.png";
import discount from "../assets/images/icons/discount.png";

const PlanDetail = () => {
  return (
    <div className="container">
      <img src={premium} height="50" alt="Plan Box" />
      <img src={planBox} height="73" alt="Plan Box" />
      <h1>$125,000</h1>
      <h4>Plan 1</h4>
      <div>
        <h1>1</h1>
        <h3>HORA</h3>
        <h3>De Clase Online</h3>
      </div>
      <ul>
        <li>- Tips Academicos</li>
        <li>- Clases Programadas</li>
        <li>- Mas Informacion</li>
      </ul>
      <img src={dialogBoxText} height="73" alt="Dialog Box Text" />
    </div>
  );
};

export default PlanDetail;
