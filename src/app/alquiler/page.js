import React from "react";
import SServicios from "../components/alquiler/alquiler/s-servicios";
import SPiletas from "../components/alquiler/pileta";
import { bombas, piletas, cisternas } from "../data/data";
import SCards from "../components/alquiler/cards";
import SBomba from "../components/alquiler/bombaCard";
import Formulario from "../components/home/form";
import SCards2 from "../components/alquiler/cards/scard2";

const page = () => {
  return (
    <>
      <SServicios />
      <SPiletas h2={piletas.h2} p={piletas.p} />
      <SCards />
      <SPiletas h2={bombas.h2} p={bombas.p} />
      <SBomba />
      <SPiletas h2={cisternas.h2} p={cisternas.p} />
      <SCards2 />
      <Formulario />
    </>
  );
};

export default page;
