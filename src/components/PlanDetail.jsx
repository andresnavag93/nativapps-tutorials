import React from "react";
import planBox from "../assets/images/icons/plan-box.png";
import dialogBoxText from "../assets/images/icons/dialog-box-text.png";
import premium from "../assets/images/icons/premium.png";
import discount from "../assets/images/icons/discount.png";

const PlanDetail = ({
  price,
  planName,
  planHour,
  planHourWord = "HORAS",
  type = "plan",
}) => {
  return (
    <div className="plans-detail">
      <h1 className="plans-detail__price">{price}</h1>
      <h4 className="plans-detail__name">{planName}</h4>
      <div className="plans-detail__schedule">
        <h1 className="plans-detail__schedule-hour">{planHour}</h1>
        <div>
          <h3 className="plans-detail__schedule-hour-word">{planHourWord}</h3>
          <h3 className="plans-detail__schedule-description">
            DE CLASE ONLINE
          </h3>
          <h3 className="plans-detail__schedule-description">EN VIVO</h3>
        </div>
      </div>
      <ul className="plans-detail__ul">
        <li className="plans-detail__li">- Tips Académicos</li>
        <li className="plans-detail__li">- Clases Programadas</li>
        <li className="plans-detail__li-custom">- Más Información</li>
      </ul>
      <img
        className="plans-detail__dialog-box-text"
        src={dialogBoxText}
        height="73"
        alt="Dialog Box Text"
      />
      {type === "promotion" && (
        <img
          className="plans-detail__premium-icon"
          src={premium}
          height="90"
          alt="Plan Box"
        />
      )}
      {type === "discount" && (
        <img
          className="plans-detail__premium-icon"
          src={discount}
          height="90"
          alt="Plan Box"
        />
      )}
    </div>
  );
};

export default PlanDetail;
