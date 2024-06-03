import React from "react";

import "./srv.css";
import FabricacionMod from "./fabricacion";
import Alquiler from "./alquiler";

const Servicios = () => {
  return (
    <div className="image-bg-srv">
      <section className=" min-h-40 bg-black text-yellow-50 flex flex-col justify-center items-center px-[var(--padding-x)] py-[var(--padding-y)]">
        <h2 className="text-center">NUESTROS SERVICIOS</h2>
        <h3 className=" bg-slate-50 text-black">ALQUILER Y FABRICACION</h3>
      </section>
      {/* ALQUIlER */}
      <Alquiler />
      {/* Fabricacion */}
      <FabricacionMod />
    </div>
  );
};

export default Servicios;
