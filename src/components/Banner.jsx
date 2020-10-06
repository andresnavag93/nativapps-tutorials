import React from "react";
import TriangleBackground from "./TriangleBackground";

const Banner = () => {
  return (
    <section className="banner__section">
      <div className="banner">
        <TriangleBackground />
        <h1 className="banner__heading">Tutorías online</h1>
        <div className="banner__hr" />
        <h3 className="banner__description">Clases en vivo</h3>
        <div className="banner__bg-color"></div>
        <TriangleBackground rotate={true} />
      </div>
    </section>
  );
};

export default Banner;
