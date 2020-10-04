import React from "react";
import bannerImage from "../assets/images/banners/banner.jpg";
import footerImage from "../assets/images/banners/footer.jpg";
import "../assets/styles/components/Banner.scss";

const Banner = ({ type = "banner" }) => {
  let content;
  if (type === "onlyImage") {
    content = <img src={footerImage} height="73" alt="Banner sin texto" />;
  } else {
    content = (
      <div className="banner__img">
        {/* <img src={bannerImage} height="73" alt="Banner con texto" /> */}
        <h1>Tutorias online</h1>
        <div>------------</div>
        <h3>Clases en vivo</h3>
      </div>
    );
  }
  return <section className="banner">{content}</section>;
};

export default Banner;
