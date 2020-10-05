import React from "react";
import triangleYellow from "../assets/images/icons/triangle-yellow.png";
import triangleYellowSmall from "../assets/images/icons/triangle-yellow-small.png";

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
      <picture>
        <div className="instruction-detail">
          {/* <source media="(min-width:769px)" srcset={triangleYellow} /> */}
          <img
            className={`instruction-detail__img ${rotate}`}
            src={triangleYellow}
            alt="Yellow triangle "
          />
          <h1 className="instruction-detail__number">{number}</h1>
        </div>
      </picture>
      <h4 className="instruction-detail__description">{description}</h4>
    </div>
  );
};

export default InstructionDetail;
