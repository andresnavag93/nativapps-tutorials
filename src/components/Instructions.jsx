import React from "react";
import playButton from "../assets/images/icons/play-button.png";
import InstructionDetail from "../components/InstructionDetail";

const Instructions = () => {
  return (
    <section className="instructions">
      <div className="instructions__container">
        <h1>Como funciona</h1>
        <div className="banner__hr" />
        <h3>
          Clases en vivo, personalizadas para niños y jóvenes de colegio que les
          permite aprender de manera segura y desde cualquier lugar
        </h3>
        <InstructionDetail />
        <img src={playButton} height="73" alt="Logo de youtube" />
        <h4>Ver video</h4>
      </div>
    </section>
  );
};

export default Instructions;
