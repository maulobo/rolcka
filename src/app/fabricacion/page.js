import React from "react";
import FabricacionMod from "../components/home/servicios/fabricacion";
import LateralScroll from "../components/fabricacion/scroll-section";

const page = () => {
  return (
    <div>
      <FabricacionMod />
      <LateralScroll />
      <div className="h-screen bg-black"></div>
    </div>
  );
};

export default page;
