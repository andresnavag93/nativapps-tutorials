import React from "react";
import playButton from "../assets/images/icons/play-button.png";
import InstructionDetail from "../components/InstructionDetail";

const Instructions = () => {
  return (
    <section className="instructions">
      <div className="instructions__container">
        <h1 className="instructions__heading">Como funciona</h1>
        <div className="instructions__hr" />
        <h3 className="instructions__description">
          Clases en vivo, personalizadas para niños y jóvenes
        </h3>
        <h3 className="instructions__description">
          de colegio que les permite aprender de manera
        </h3>
        <h3 className="instructions__description">
          segura y desde cualquier lugar
        </h3>
      </div>
      <div className="instructions__details">
        <InstructionDetail
          number={"1"}
          descriptionA={"Elige"}
          descriptionB={"una materia"}
        />
        <InstructionDetail
          number={"2"}
          descriptionA={"Selecciona"}
          descriptionB={"un tutor"}
        />
        <InstructionDetail
          number={"3"}
          descriptionA={"Programa"}
          descriptionB={"tu clase"}
        />
        <InstructionDetail
          number={"4"}
          descriptionA={"A"}
          descriptionB={"¡Aprender!"}
        />
      </div>
      <figure className="instructions__play-button-img">
        <img src={playButton} width="120" alt="Logo de youtube" />
      </figure>
      <h4 className="instructions__play-button-description">Ver video</h4>
    </section>
  );
};

export default Instructions;
