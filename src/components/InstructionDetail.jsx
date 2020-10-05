import React from "react";
import triangleYellow from "../assets/images/icons/triangle-square.png";

const InstructionDetail = ({
  number = "1",
  descriptionA = "Elige",
  descriptionB = "una materia",
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
      break;
    default:
      rotate = "instruction-detail__rotate-triangle-1";
      break;
  }
  return (
    <div>
      <picture>
        <div className={`instruction-detail`}>
          <img
            className={`instruction-detail__img ${rotate}`}
            src={triangleYellow}
            alt="Yellow triangle "
          />
          <h1 className="instruction-detail__number">{number}</h1>
        </div>
      </picture>
      <h4 className="instruction-detail__description">{descriptionA}</h4>
      <h4 className="instruction-detail__description">{descriptionB}</h4>
    </div>
  );
};

export default InstructionDetail;
