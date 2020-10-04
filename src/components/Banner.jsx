import React from "react";
import bannerImage from "../assets/images/banners/banner.jpg";
import footerImage from "../assets/images/banners/footer.jpg";
import Triangle from "./Triangle";

const Banner = ({ type = "banner" }) => {
  let content;
  if (type === "onlyImage") {
    content = <img src={footerImage} height="73" alt="Banner sin texto" />;
  } else {
    content = (
      <>
        <h1 className="banner__heading">Tutorías online</h1>
        <div className="banner__hr" />
        <h3 className="banner__description">Clases en vivo</h3>
      </>
    );
  }
  return (
    <section className="banner__section">
      <div className="banner">
        <Triangle />
        {content}
        <div className="banner__bg-color"></div>
        <Triangle rotate={true} />
      </div>
    </section>
  );
};

export default Banner;
