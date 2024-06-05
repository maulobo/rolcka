import React from "react";
import SServicios from "../components/servicios/alquiler/s-servicios";
import SPiletas from "../components/servicios/pileta";
import { bombas, piletas, cisternas } from "../data/data";
import SCards from "../components/servicios/cards";
import SBomba from "../components/servicios/bombaCard";
import Formulario from "../components/home/form";

const page = () => {
  return (
    <>
      <SServicios />
      <SPiletas h2={piletas.h2} p={piletas.p} />
      <SCards />
      <SPiletas h2={bombas.h2} p={bombas.p} />
      <SBomba />
      <SPiletas h2={cisternas.h2} p={cisternas.p} />
      <SCards />
      <Formulario />
      ``
    </>
  );
};

export default page;
