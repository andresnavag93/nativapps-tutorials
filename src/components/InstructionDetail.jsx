import React from "react";
import triangleYellow from "../assets/images/icons/triangle-yellow.png";

const InstructionDetail = ({
  number = "1",
  description = "Elige una materia",
}) => {
  let rotate = "";
  switch (number) {
    case "2":
      rotate = "instruction-detail__rotate-triangle-2";
      break;
    case "3":
      rotate = "instruction-detail__rotate-triangle-3";
      break;
    case "4":
      rotate = "instruction-detail__rotate-triangle-4";
      description = (
        <>
          {"A"}
          <br />
          {"¡Aprender!"}
        </>
      );
      break;
    default:
      break;
  }
  return (
    <div>
      <div className="instruction-detail">
        <img
          className={`instruction-detail__img ${rotate}`}
          src={triangleYellow}
          alt="Yellow triangle "
        />
        <h1 className="instruction-detail__number">{number}</h1>
      </div>
      <h4 className="instruction-detail__description">{description}</h4>
    </div>
  );
};

export default InstructionDetail;
