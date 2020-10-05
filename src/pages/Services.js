import React from "react";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Instructions from "../components/Instructions";
import Subscribe from "../components/Subscribe";
import Plans from "../components/Plans";
import Clients from "../components/Clients";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Instructions />
        <Subscribe
          type={1}
          description={"y obtén precios especiales"}
          dialogBoxMessage={"Me interesa"}
        />
        <Subscribe
          type={2}
          description={"y obtén clases GRATIS"}
          dialogBoxMessage={"Subscribirme"}
        />
      </main>
      {/*
      <Plans />
      <Subscribe
        type={2}
        description={"y obtén clases GRATIS"}
        dialogBoxMessage={"Subscribirme"}
      />
      <Clients />
      <Banner type={"onlyImage"} />
      <Footer /> */}
    </>
  );
};

export default Services;
