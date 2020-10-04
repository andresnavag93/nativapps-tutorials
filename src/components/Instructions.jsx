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
          Clases en vivo, personalizadas para niños y jóvenes de colegio que les
          permite aprender de manera segura y desde cualquier lugar
        </h3>
      </div>
      <div className="instructions__details">
        <InstructionDetail number={"1"} description={"Elige una materia"} />
        <InstructionDetail number={"2"} description={"Selecciona un tutor"} />
        <InstructionDetail number={"3"} description={"Programa tu clase"} />
        <InstructionDetail number={"4"} description={"A ¡Aprender!"} />
      </div>
      <figure className="instructions__play-button-img">
        <img src={playButton} alt="Logo de youtube" />
      </figure>
      <h4 className="instructions__play-button-description">Ver video</h4>
    </section>
  );
};

export default Instructions;
